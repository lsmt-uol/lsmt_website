import hero from "../../assets/hero.jpg"
import Header from "./Header";



export default function Landingg(){
    return(

    <div
      className=" min-h-screen 
        w-full
        bg-cover bg-no-repeat 
        bg-center      /* default for mobile */
        sm:bg-center   /* small screens */
        md:bg-top      /* tablet */
        lg:bg-center   /* desktop */
        "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <Header />
      {/* other content */}
    </div>


    )
}