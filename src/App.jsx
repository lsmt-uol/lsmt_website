
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Firestore from "./components/Firestore";
import Firestorage from "./components/Firestorage";
import Landingg from"./components/layout/Landingg"
export default function App() {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      <>
      <Landingg />
      {/* <Header /> */}
      {/* <Firestore message ="team_members"/>
      <Firestorage />*/}
      <Footer />
      </>
    </div>
  );
}


