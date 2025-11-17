import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Firestore from "./components/FirebaseD/Firestore";
import Firestorage from "./components/FirebaseD/Firestorage";
import Landing from"./components/layout/Landing"
import Aboutus from "./components/layout/AboutUs";
import Foo from "./components/layout/Foo";
import Sponsors from "./components/layout/Sponsors"
import Contactus from "./components/layout/ContactUs";
import { useRef } from "react";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsref = useRef(null);
  const ourTeamRef = useRef(null);
  const sponsorsRef = useRef(null);
  const contactRef = useRef(null);
  
  return (
    <div className="min-h-screen text-white overflow-hidden">
      <>
      <div>
        <Landing
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsref={projectsref}
        ourTeamRef={ourTeamRef} 
        sponsorsRef={sponsorsRef}
        contactRef={contactRef}/>
      </div>

      <div ref={aboutRef}><Aboutus /></div>
      <div ref={sponsorsRef}><Sponsors /></div>
      <div ref={contactRef}><Contactus /></div>

      <Footer />
      </>
    </div>
  );
}



{/* <Header /> */}
{/* <Firestore collection ="team_members"/> */}
{/* <Firestorage path = "members/LSMT - Logo.png"/> */}