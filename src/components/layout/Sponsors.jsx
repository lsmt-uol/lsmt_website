import React, { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config/firebase'; 

const Sponsors = () => {
    
    const [fetchedLogoUrl, setFetchedLogoUrl] = useState(null); 
    const [fetchedVideoUrl, setFetchedVideoUrl] = useState(null); 
    
    const principalSponsor = {
        name: 'Link to the sponsors website', 
        storagePath: 'sponsors/noimage.jpg', 
        videoStoragePath: 'sponsors/loopvideo.mp4', 
        websiteUrl: 'link', 
        description: "Description about our sponsor",
    };

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
    
        <section className="min-h-screen bg-black text-white py-20 px-4 relative">
            

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
                
                <h1 className="text-4xl font-extrabold mb-12 tracking-tight">
                    Our Valued Partners
                </h1>
                
                <div className="bg-transparent p-8 sm:p-12 rounded-xl shadow-2xl border border-white">
                    
                    <p className="text-lg font-semibold uppercase tracking-widest mb-6">
                        <span className="text-yellow-600">Bronze</span> 
                        <span className="text-gray-200"> Silver</span>  
                        <span className="text-yellow-500"> Gold</span> 
                        <span className="text-white"> (for each sponsor we will just keep one of them)</span> 
                    </p>

                    {fetchedLogoUrl ? (
                        <a
                            href={principalSponsor.websiteUrl}
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
                    
                    <p className="text-base sm:text-lg text-white leading-relaxed mb-8">
                        {principalSponsor.description}
                    </p>

                    <a 
                        href={principalSponsor.websiteUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block px-8 py-3 text-base font-medium text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition duration-300 shadow-xl"
                    >
                        Explore Their Website
                    </a>

                </div>
                
                <div className="mt-20 pt-10 border-t border-gray-700">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Interested in Partnership?
                    </h2>
                    <p className="text-white mb-6 max-w-2xl mx-auto">
                        We have different partnerships available.
                    </p>
                    <a 
                        href="#" 
                        className="px-6 py-3 border-2 border-amber-400  text-amber-400  rounded-full font-medium hover:bg-sky-500 hover:border-sky-500 hover:text-white transition duration-300"
                    >
                        Learn How to Become a Partner (brochure link)
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Sponsors;