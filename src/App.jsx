import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Firestore from "./components/FirebaseD/Firestore";
import Firestorage from "./components/FirebaseD/Firestorage";
import Landing from"./components/layout/Landing"
import Aboutus from "./components/layout/AboutUs";
import Foo from "./components/layout/Foo";
import Sponsors from "./components/layout/Sponsors"
import Contactus from "./components/layout/ContactUs";

export default function App() {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      <>
      <Landing />
      <Aboutus />
      {/* <Header /> */}
      {/* <Firestore collection ="team_members"/> */}
      {/* <Firestorage path = "members/LSMT - Logo.png"/> */}
      {/* <Footer /> */}
      <Sponsors />
      <Contactus />
      <Footer />
      </>
    </div>
  );
}


