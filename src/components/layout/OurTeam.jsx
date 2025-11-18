import React, { useEffect, useMemo, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config/firebase";
import TeamCard from "./TeamCard";

const PLACEHOLDER_IMAGE = null;

export default function OurTeam() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDept, setActiveDept] = useState("all");

  const deptConfig = {
    board: { label: "Board" },
    electrical: { label: "Electrical" },
    mechanical: { label: "Mechanical" },
    management: { label: "Management" },
    software: { label: "Software" },
  };

  useEffect(() => {
    let isMounted = true;

    async function loadMembers() {
      setLoading(true);
      setError(null);

      try {
        const q = query(collection(db, "members"), orderBy("name"));
        const snapshot = await getDocs(q);

        const docs = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));

        const promises = docs.map(async (doc) => {
          const filename = `${doc.name}.png`;
          const fileRef = ref(storage, `members/${filename}`);

          try {
            const url = await getDownloadURL(fileRef);
            return { ...doc, imageUrl: url };
          } catch {
            return { ...doc, imageUrl: PLACEHOLDER_IMAGE };
          }
        });

        const results = await Promise.all(promises);

        if (isMounted) {
          setMembers(results);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load team members.");
          setLoading(false);
        }
      }
    }

    loadMembers();
    return () => { isMounted = false; };
  }, []);

  // Departments list + Board always second
  const depts = useMemo(() => {
    const uniqueDepts = Array.from(
      new Set(members.map((m) => m.dept).filter(Boolean))
    );
    return ["all", "board", ...uniqueDepts];
  }, [members]);

  // Sorting logic (Director > Chiefs > Others)
// Sorting logic (Director > Academic Supervisor > Chiefs > Others)
const sortMembers = (arr) => {
  return arr.slice().sort((a, b) => {
    const aRole = a.role || "";
    const bRole = b.role || "";

    const aIsDirector = aRole === "Team Director";
    const bIsDirector = bRole === "Team Director";

    const aIsAcademic = aRole === "Team Academic Supervisor";
    const bIsAcademic = bRole === "Team Academic Supervisor";

    const aIsChief = aRole.startsWith("Chief");
    const bIsChief = bRole.startsWith("Chief");

    const aIsDesign = a.dept === "design";
    const bIsDesign = b.dept === "design";

    // 🟦 Special Design Department Ordering
    if (aIsDesign && bIsDesign) {
      if (aIsDirector && !bIsDirector) return -1;
      if (!aIsDirector && bIsDirector) return 1;

      if (aIsAcademic && !bIsAcademic) return -1;
      if (!aIsAcademic && bIsAcademic) return 1;

      if (aIsChief && !bIsChief) return -1;
      if (!aIsChief && bIsChief) return 1;
    }

    // 🟥 Global Ordering
    if (aIsDirector && !bIsDirector) return -1;
    if (!aIsDirector && bIsDirector) return 1;

    if (aIsAcademic && !bIsAcademic) return -1;
    if (!aIsAcademic && bIsAcademic) return 1;

    if (aIsChief && !bIsChief) return -1;
    if (!aIsChief && bIsChief) return 1;

    return a.name.localeCompare(b.name);
  });
};


  // Filtering
  const filtered = useMemo(() => {
    if (activeDept === "all") return sortMembers(members);

    if (activeDept === "board") {
      return sortMembers(
        members.filter(
          (m) =>
            m.role === "Team Director" ||
            m.role === "Team Academic Supervisor" ||
            m.role?.startsWith("Chief")
        )
      );
    }

    return sortMembers(members.filter((m) => m.dept === activeDept));
  }, [members, activeDept]);

  return (
    <section className="py-26 bg-linear-to-t from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#3b82f5]">OUR TEAM</h2>
          <div className="bg-white w-60 h-0.5 mx-auto my-2 "></div>
          <p className="text-gray-400 mt-2">
            Only with strong, inspiring, and creative minds can we keep coming up with new and inventive solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {depts.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDept(d)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                activeDept === d
                  ? "bg-[#3b82f5] text-black font-semibold"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {d === "all"
                ? "All"
                : deptConfig[d]?.label ?? d}
            </button>
          ))}
        </div>

        {/* Status */}
        {loading ? (
          <div className="text-center text-gray-300 py-20">Loading team members…</div>
        ) : error ? (
          <div className="text-center text-red-400 py-20">{error}</div>
        ) : filtered.length === 0 ? (
          <div className="text-center text-gray-400 py-20">No team members found.</div>
        ) : (
          <div
                className="
                  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
                  overflow-y-auto
                  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent
                  hover:scrollbar-thumb-gray-500
                "
                style={{
                  maxHeight: "650px",
                  paddingRight: "6px",
                  scrollbarWidth: "none" // Firefox
                }}>
                  
            {filtered.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
