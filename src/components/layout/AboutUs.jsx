import React, { useEffect, useState } from "react";
import { storage } from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";

export default function AboutUs(){
    const storageRef1 = ref(storage, `landing/aboutus.jpg`);
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
                </div>
                <img 
                className="lg:mx-0 mx-auto w-full h-auto max-h-[650px] rounded-3xl object-contain" 
                src={aboutImage} 
                alt="About Us image"
                />            
            </div>
        </div>
    </section>
                                            
    )
}