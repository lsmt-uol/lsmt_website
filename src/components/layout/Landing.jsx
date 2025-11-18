import { useEffect, useState } from "react";
import hero from "../../assets/hero.jpg";
import Header from "./Header";

export default function Landing({
  homeRef,
  aboutRef,
  projectsref,
  ourTeamRef,
  sponsorsRef,
  contactRef,
}) {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToAbout = () => {
    aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(Math.max(scrollPercent, 0), 100));

      setShowScrollUp(scrollTop > windowHeight * 0.4);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={homeRef}
      className="
        relative
        min-h-screen 
        w-full
        bg-cover
        bg-no-repeat 
        bg-center
        sm:bg-center
        md:bg-top
        lg:bg-center
      "
      style={{ backgroundImage: `url(${hero})` }}
    >

      {/* 🔥 Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[4px] bg-transparent z-[60]">
        <div
          className="h-full transition-all duration-10 bg-[#3b82f5]"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsref={projectsref}
        ourTeamRef={ourTeamRef}
        sponsorsRef={sponsorsRef}
        contactRef={contactRef}
      />

      {/* ↓ Scroll Down Arrow */}
      <button
        onClick={scrollToAbout}
        className="
          absolute 
          bottom-6 
          left-1/2 
          -translate-x-1/2
          p-3
          rounded-full
          bg-black/50
          backdrop-blur-md
          hover:bg-black/70
          transition
          animate-bounce
        "
        aria-label="Scroll to About Section"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 16.5l8-8-1.41-1.42L12 13.67 5.41 7.08 4 8.5l8 8z" />
        </svg>
      </button>

      {/* ↑ Scroll to Top Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-8 right-8
            p-3 z-[60]
            rounded-full
            bg-black/50
            backdrop-blur-md
            hover:bg-black/70
            shadow-[0_0_25px_rgba(255,255,255,0.4),0_0_12px_rgba(255,255,255,0.8)]
            transition
          "
          aria-label="Scroll to Top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 7.5l-8 8 1.41 1.42L12 10.33l6.59 6.59L20 15.5z" />
          </svg>
        </button>
      )}
    </div>
  );
}
