import React, { useEffect, useState } from "react";
import { storage } from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";

export default function AboutUs(){
    const storageRef1 = ref(storage, `landing/hero.jpg`);
    const [aboutImage, setAboutImage] = useState("");
    useEffect(() => {
        getDownloadURL(storageRef1).then((url) => {
            setAboutImage(url);
        });
    }, []);

    return(
    <section class="py-24 relative bg-linear-to-t from-gray-900 via-black to-gray-900">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div class="w-full   gap-8 grid lg:grid-cols-2 grid-cols-1">
                <div class="w-full flex-col  lg:items-start  gap-10 inline-flex">
                    <div class="w-full flex-col  gap-4 flex">
                        <h2 className="text-4xl font-bold text-[#3b82f5] text-center">ABOUT US</h2>
                        <div className="bg-white w-60 h-0.5 mx-auto "></div>
                        {/* <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Building Stronger Communities through Collaboration and Empowerment</h2> */}
                        {/* <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Through collaborationperse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.</p> */}
                        <p className="text-white m-0 mt-3 font-bold text-base font-sans leading-relaxed lg:text-start text-center">
                        <span className="text-amber-400 font-[5000]">Leeds Sustainable Marine Team (LSMT) </span> 
                        is a multidisciplinary team of engineering students from the
                        <span className="text-amber-400 font-[5000]"><a href="https://eps.leeds.ac.uk/" target="_blank"> University of Leeds </a></span> 
                        that focuses on furthering sustainable marine technology through innovative design and participation in the
                        <span className="text-amber-400 font-[5000]"><a href="https://energyboatchallenge.com/" target="_blank"> Monaco Energy Boat Challenge (MEBC). </a></span>We develop environmentally responsible propulsion systems, including hydrogen and electric power, to drive the future of clean marine transport.
                        Our team participates in international marine engineering challenges that foster technical excellence, sustainability, and leadership. LSMT is 
                        committed to pushing the boundaries of sustainable marine innovation while preparing future engineers for impactful careers.
                    </p>   
                    </div>
                    {/* <button class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span class="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                    </button> */}
                </div>
                <img class="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src={aboutImage} alt="about Us image" />
            </div>
        </div>
    </section>
                                            
    )
}