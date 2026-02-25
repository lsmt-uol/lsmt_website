import Landing from "./components/layout/Landing";
import AboutUs from "./components/layout/AboutUs";
import OurTeam from "./components/layout/OurTeam";
import Sponsors from "./components/layout/Sponsors";
import ContactUs from "./components/layout/ContactUs";
import Brochure from "./components/layout/Brochure"; 
import Footer from "./components/layout/Footer";
import { useRef } from "react";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsref = useRef(null);
  const ourTeamRef = useRef(null);
  const sponsorsRef = useRef(null);
  const brochureRef = useRef(null); 
  const contactRef = useRef(null);
  
  return (
    <div className="overflow-hidden bg-white">
      <div ref={homeRef}>
        <Landing
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectsref={projectsref}
          ourTeamRef={ourTeamRef} 
          sponsorsRef={sponsorsRef}
          contactRef={contactRef}
        />
      </div>

      <div ref={aboutRef}><AboutUs /></div>
      
      {/* <div ref={projectsref}><Projects /></div> */}
      
      <div ref={ourTeamRef}><OurTeam /></div>

      {/* Sponsors Section */}
      <div ref={sponsorsRef}>
        <Sponsors />
      </div>
      
      {/* Brochure Section - Assigned to its own ref */}
      <div ref={brochureRef}>
        <Brochure />
      </div> 
   
      <div ref={contactRef}>
        <ContactUs />
      </div>

      <Footer
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsref={projectsref}
        ourTeamRef={ourTeamRef} 
        sponsorsRef={sponsorsRef}
        contactRef={contactRef}
      />
    </div>
  );
}