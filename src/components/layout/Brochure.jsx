import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const BROCHURE_FILE_PATH = "brochure/LSMT partnership brochure.pdf"; 

const useBrochureLink = () => {
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                const storage = getStorage();
                const brochureRef = ref(storage, BROCHURE_FILE_PATH);
                
                const url = await getDownloadURL(brochureRef);
                setDownloadUrl(url); 
            } catch (error) {
                console.error("Error fetching brochure download URL:", error);
                setFetchError("Could not retrieve link.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchUrl();
    }, []); 

    return { downloadUrl, isLoading, fetchError };
};


export default function Brochure() {
    const { downloadUrl, isLoading, fetchError } = useBrochureLink();
    const primaryStyleClasses = "border-[#3b82f5] text-[#3b82f5] bg-transparent";
    const buttonText = isLoading 
        ? "Loading Brochure..." 
        : fetchError 
            ? "Error Loading Link" 
            : "View Brochure";

    const isButtonDisabled = isLoading || fetchError;
    
    return (
        <div className="w-full flex justify-center py-16 bg-linear-to-t from-gray-900 via-black to-gray-900">
            
            <div className="flex flex-col items-center justify-center p-4 w-full max-w-7xl">
                
                <h2 className="text-4xl font-bold text-[#3b82f5] text-center uppercase">
                    Our Brochure
                </h2>
                <div className="bg-white w-70 h-0.5 mx-auto my-2 mb-12"></div>
                
                <div className="flex flex-col items-center justify-center w-full max-w-sm">
                    <a 
                        href={downloadUrl || "#"} 
                
                        onClick={isButtonDisabled ? (e) => e.preventDefault() : undefined} 
                        target="_blank"
                        rel="noopener noreferrer"
                        
                        className={`
                            w-full 
                            px-10 py-3
                            border-2
                            rounded-full
                            text-base font-semibold 
                            uppercase 
                            tracking-widest       
                            transition duration-300 
                            ease-in-out
                            
                            ${primaryStyleClasses}
                            
                            // Style changes for disabled state
                            ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-amber-400 hover:text-amber-400 hover:font-extrabold'}
                            
                            shadow-md hover:shadow-lg
                            
                            text-center           
                        `}
                        aria-label={buttonText}
                    >
                        {buttonText}
                    </a>
                    {fetchError && <p className="text-red-500 mt-2 text-sm">{fetchError}</p>}
                </div>

            </div>
            
        </div>
    );
}