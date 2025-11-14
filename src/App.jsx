import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Firestore from "./components/Firestore";

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-hidden">
      <>
      <Navbar />
      <Firestore message={"team_members"}/>
      <Firestore message={"team_members"}/>
      <Firestore message={"team_members"}/>
      <Footer />
      </>
    </div>
  );
}


