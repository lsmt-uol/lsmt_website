
import React, { useEffect, useState } from "react";
import { storage } from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";



export default function Aboutus() {

    const storageRef1 = ref(storage, `landing/hero.jpg`);
    const [aboutImage, setAboutImage] = useState("");
    useEffect(() => {
        getDownloadURL(storageRef1).then((url) => {
            setAboutImage(url);
        });
    }, []);

    return (
        // flex-col for mobile (stacks in code order: Image then Text)
        // md:flex-row-reverse for desktop (reverses code order: Text then Image)
        // md:items-stretch ensures both columns are the same height
        <section className="w-full bg-black h-fit py-3 flex flex-wrap md:flex-row-reverse flex-col md:items-stretch"> 

            {/* 1. IMAGE CONTAINER (Right on Desktop, Top on Mobile) */}
            <div className="md:w-1/2 w-full h-full ">
                <img
                    src={aboutImage}
                    alt="Leeds Sustainable Marine Team"
                    // w-full h-auto makes the image shrink on small screens
                    className="w-full h-auto object-cover md:h-full" 
                />
            </div>

            {/* 2. TEXT CONTAINER (Left on Desktop, Bottom on Mobile) */}
            <div className="md:w-1/2 w-full h-full pt-8 px-6 pb-1 overflow-hidden flex flex-col">
                
                <h1 className="text-white font-semibold text-2xl text-center">ABOUT US</h1>
                <div className="bg-blue-500 w-full h-0.5 my-2"></div>
                
                {/* Wrapper to force vertical growth of the text content */}
                <div className="flex flex-col justify-between flex-grow">
                    
                    {/* The paragraphs are grouped to ensure the available space is distributed */}
                    <p className="text-white m-0 mt-3 leading-relaxed text-justify">
                        <span className="text-amber-400 font-[5000]">Leeds Sustainable Marine Team (LSMT)</span> is a multidisciplinary team of engineering students from the University of Leeds that focuses on furthering sustainable marine technology through innovative design and participation in the Monaco Energy Boat Challenge (MEBC). We develop environmentally responsible propulsion systems, including hydrogen and electric power, to drive the future of clean marine transport. Our team participates in international marine engineering challenges that foster technical excellence, sustainability, and leadership. LSMT is committed to pushing the boundaries of sustainable marine innovation while preparing future engineers for impactful careers.
                    </p>
                    <p className="text-white m-0 mt-3 leading-relaxed text-justify">
                        Beyond competition, LSMT helps students gain hands-on experience in designing, building and testing actual engineering systems. Members work across technical and operational areas, working together to turn challenging ideas into reality. Working in a multidisciplinary environment, students are challenged to apply their classroom knowledge to practical problems, while also developing important skills in teamwork, problem-solving, and project management.
                    </p>
                    <p className="text-white m-0 mt-3 leading-relaxed text-justify">
                        Our work is further supported by the University of Leeds, industrial collaborators and environmental organisations with similar aspirations towards cleaner marine technology. The partnerships provide valuable technical insight, access to specialized resources, and opportunities for professional engagement that help make our designs innovative and industry-relevant.
                    </p>
                    <p className="text-white m-0 mt-3 leading-relaxed text-justify">
                        As we continue to grow, LSMT seeks to inspire a new generation of engineers to contribute to a more sustainable marine future, not just through competition projects but also skills, experience and the passion that our members take forward into their professional lives.
                    </p>
                </div>
            </div>
        </section>
    )
}