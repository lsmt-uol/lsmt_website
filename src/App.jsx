import Landing from"./components/layout/Landing"
import AboutUs from "./components/layout/AboutUs";
import OurTeam from "./components/layout/OurTeam";
import Sponsors from "./components/layout/Sponsors"
import ContactUs from "./components/layout/ContactUs";
import Footer from "./components/layout/Footer";
import { useRef } from "react";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsref = useRef(null);
  const ourTeamRef = useRef(null);
  const sponsorsRef = useRef(null);
  const contactRef = useRef(null);
  
  return (
    <div className="overflow-hidden">
      <>
      
      <div ref={homeRef}>
        <Landing
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsref={projectsref}
        ourTeamRef={ourTeamRef} 
        sponsorsRef={sponsorsRef}
        contactRef={contactRef}/>
      </div>
      <div ref={aboutRef}><AboutUs /></div>
      {/* <div ref={projectsRef}><Projects /></div> */}
      <div ref={ourTeamRef}><OurTeam /></div>
      {/* <div ref={sponsorsRef}><Sponsors /></div> */}
      <div ref={contactRef}><ContactUs/></div>

      <Footer
      homeRef={homeRef}
      aboutRef={aboutRef}
      projectsref={projectsref}
      ourTeamRef={ourTeamRef} 
      sponsorsRef={sponsorsRef}
      contactRef={contactRef}/>
      

      </>
    </div>
  );
}



{/* <Firestore collection ="team_members"/> */}
{/* <Firestorage path = "members/LSMT - Logo.png"/> */}