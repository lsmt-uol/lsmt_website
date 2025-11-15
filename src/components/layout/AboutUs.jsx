
import React, { useEffect, useState } from "react";
import { storage } from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";



export default function Aboutus(){

    const storageRef1 = ref(storage, `landing/hero.jpg`);
    const [aboutImage, setAboutImage] = useState("");
    useEffect(() => {
    getDownloadURL(storageRef1).then((url) => {
      setAboutImage(url);
    });
  }, []);

    return(
        <section className=" w-full bg-[#020716] h-fit py-3 flex max-sm:flex-col">
            <div className=" md:w-[40%] max-sm:w-full sm:max-md:w-1/2 h-full pt-8 px-6 pb-1 overflow-hidden">
            <h1 className="text-white font-semibold text-2xl text-center">ABOUT US</h1>
            <div className="bg-blue-500  w-full h-0.5 my-2"></div>
                <p className="text-white m-0 mt-3  leading-relaxed	text-justify">
                    <span className="text-amber-400 font-[5000]">Leeds Sustainable Marine Team (LSMT) </span> is a multidisciplinary group of University of Leeds engineering students focused on advancing sustainable marine technology through innovative design and participation in the Monaco Energy Boat Challenge (MEBC). We specialise in developing environmentally responsible propulsion systems, including hydrogen and electric power, to drive the future of clean marine transport.
                    Our team participates in international marine engineering challenges, fostering technical excellence, sustainability, and leadership. LSMT is committed to pushing the boundaries of sustainable marine innovation while preparing future engineers for impactful careers.
                </p>
            </div>
            <div className=" w-[60%] max-sm:w-full max-md:w-1/2 h-full ">
            <img
                src={
                aboutImage
                }
                alt=""
                className="w-1440px h-665px object-cover"
            />
            </div>
        </section>
    )
}