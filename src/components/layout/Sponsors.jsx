import React, { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config/firebase'; 

const Sponsors = () => {
    
    const [fetchedLogoUrl, setFetchedLogoUrl] = useState(null); 
    const [fetchedVideoUrl, setFetchedVideoUrl] = useState(null); 
    const [PdfUrl, setPdfUrl] = useState("");

    const principalSponsor = {
        name: 'Link to the sponsors website', 
        storagePath: 'sponsors/noimage.jpg', 
        videoStoragePath: 'sponsors/loopvideo.mp4', 
        websiteUrl: 'link', 
        description: "Description about our sponsor",
    };
    const fetchPdf = async () => {
        try {
        // Path to your file in Firebase Storage
        const storageRef = ref(storage, "/sponsors/LSMT_SPONSOR.pdf");

        const url = await getDownloadURL(storageRef);
        setPdfUrl(url);
        } catch (error) {
        console.error("Error fetching pdf:", error);
        }
    };

    useEffect(() => {
        fetchPdf();
    }, []);

    useEffect(() => {
        const fetchUrls = async () => {
            if (!storage) return;

            
            try {
                const logoRef = ref(storage, principalSponsor.storagePath);
                const logoUrl = await getDownloadURL(logoRef);
                setFetchedLogoUrl(logoUrl); 
            } catch (error) {
                console.error("Error fetching logo URL:", error);
            }
            
            
            try {
                const videoRef = ref(storage, principalSponsor.videoStoragePath);
                const videoUrl = await getDownloadURL(videoRef);
                setFetchedVideoUrl(videoUrl); 
            } catch (error) {
                console.error("Error fetching video URL:", error);
            }
        };

        fetchUrls();
    }, [storage, principalSponsor.storagePath, principalSponsor.videoStoragePath]);

    return (
    
        <section className="min-h-screen bg-black text-white py-18 px-4 relative font-sans">
            

            {fetchedVideoUrl && (
                <video 
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={fetchedVideoUrl} 
                    autoPlay
                    muted
                    loop 
                    playsInline 
                >
                    Your browser does not support the video tag.
                </video>
            )}

            
            
            <div className="absolute inset-0 w-full h-full bg-black opacity-70 z-0"></div>

            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl font-bold text-[#3b82f5]">OUR VALUED PARTNERS</h2>
                <div className="bg-white w-110 h-0.5 mx-auto my-2 mb-7"></div>
                <div className="bg-transparent p-8 sm:p-12 rounded-xl shadow-2xl border border-white">
                    
                    <p className="text-sm font-normal uppercase tracking-widest mb-6">
                        <span className="text-[#B87333] font-bold">Bronze</span> 
                        <span className="text-gray-200 font-bold"> Silver</span>
                        <span className="text-green-800 font-bold"> Jade</span> 
                        {/* <span className="text-white"> (for each sponsor we will just keep one of them)</span>  */}
                    </p>

                    {fetchedLogoUrl ? (
                        <a
                            href="https://www.bluemarinefoundation.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${principalSponsor.name}'s website`}
                            className="block mb-6 transition duration-300 transform hover:scale-[1.02]"
                        >
                            <img
                                src={fetchedLogoUrl}
                                alt={`${principalSponsor.name} Official Logo`}
                                className="max-h-24 sm:max-h-32 w-auto mx-auto object-contain mb-4 dark:filter dark:invert"
                            />
                        </a>
                    ) : (
                        <div className="h-24 sm:h-32 flex items-center justify-center text-white mb-6">
                            Loading Logo...
                        </div>
                    )}
                    
                    <p className="text-lg text-white font-light leading-relaxed mb-8">
                        Blue Marine Foundation is a conservation charity founded in London in 2010. We work to protect and restore life in the ocean.
                    </p>

                    <a 
                        href="https://www.bluemarinefoundation.com/"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block px-8 py-3 text-base font-medium text-white border border-white rounded-lg hover:bg-white hover:text-black transition duration-300 tracking-wide"
                    >
                        Explore Their Website
                    </a>

                </div>
                
                <div className="mt-20 pt-10 border-t border-gray-700">
                    <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tighter">
                        Interested in Partnership?
                    </h2>
                    <p className="text-lg text-white mb-6 max-w-2xl mx-auto font-light leading-relaxed">
                        We have different partnerships available.
                    </p>
                    <a 
                        href={PdfUrl}  download="LSMT_SPONSOR.pdf"
                        className="px-6 py-3 border-2 border-amber-400 text-amber-400 rounded-full font-medium hover:bg-sky-500 hover:border-sky-500 hover:text-white transition duration-300 tracking-wide"
                    >
                        Learn How to Become a Partner (brochure link)
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Sponsors;