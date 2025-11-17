import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        const messageBox = document.getElementById('messageBox');
        if (messageBox) {
            messageBox.textContent = "Thank you for your message! (Simulated submission)";
            messageBox.classList.remove('hidden');
            setTimeout(() => messageBox.classList.add('hidden'), 3000);
        }
    };

    const address = "663 New Walk Roadside, Birdeye View, GO 11020";

    const contactDetails = [
        { 
            Icon: Phone, 
            text: '010-020-0340', 
            id: 'phone',
            href: 'tel:0100200340' 
        },
        { 
            Icon: Mail, 
            text: 'LeedsSustainableMarineTeam@gmail.com', 
            id: 'email',
            href: 'mailto:LeedsSustainableMarineTeam@gmail.com' 
        },
        { 
            Icon: MapPin, 
            text: (
                <>
                    Woodhouse Lane, Leeds, West Yorkshire <br className="hidden sm:inline" /> LS2 9JT
                </>
            ), 
            id: 'location',
            align: 'start',
            href: `https://maps.google.com/?q=${encodeURIComponent(address)}`,
            target: '_blank'
        },
    ];

    const socialLinks = [
        { Icon: Linkedin, label: 'LinkedIn', colorClass: 'hover:text-blue-500', id: 'linkedin', href: '#' },
        { Icon: Instagram, label: 'Instagram', colorClass: 'hover:text-pink-500', id: 'instagram', href: '#' },
    ];

    const CustomStyles = () => (
        <style>{`
            /* Set body background to transparent */
            body {
                background-color: black;
            }
            /* Remove background from the contact container */
            .contact-container {
                background-color: transparent;
                box-shadow: none;
                border-radius: 0;
            }
            /* Input and icon styles remain the same for white text/borders */
            .dark-input {
                width: 100%;
                background-color: transparent;
                border: none;
                border-bottom: 2px solid #ffffff; 
                color: #ffffff; 
                padding-bottom: 8px;
                font-size: 1rem;
                transition: border-color 0.2s;
            }
            .dark-input:focus {
                outline: none;
                border-bottom-color: #38bdf8; 
            }
            .dark-input::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
            .dark-textarea {
                height: 120px;
                resize: none;
            }
            .icon-box {
                border: 1px solid #ffffff; 
                padding: 10px;
                line-height: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .icon-box svg {
                color: #ffffff; 
            }
            
            .clickable-item:hover .contact-text {
                color: #38bdf8; 
            }
            .clickable-item:hover .icon-box {
                border-color: #38bdf8; 
            }
            .clickable-item:hover .icon-box svg {
                color: #38bdf8; 
            }
        `}</style>
    );

    return (
        <div className="flex flex-col items-center justify-start font-sans p-8 md:p-16">
             <CustomStyles />
            
            <div id="messageBox" className="hidden fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-3 rounded-lg shadow-xl z-50 transition duration-300">
                
            </div>

            <div className="contact-container max-w-5xl w-full p-8 sm:p-12">
                
                <h1 className="text-4xl sm:text-5xl font-bold text-center uppercase tracking-wide mb-16 text-white">
                    CONTACT OUR TEAM
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-gray-300">

                    <div>
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            
                            <div>
                                <label htmlFor="name" className="block text-sm uppercase font-bold mb-2 text-white">Name</label>
                                <input type="text" id="name" className="dark-input" required />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm uppercase font-bold mb-2 text-white">Email</label>
                                <input type="email" id="email" className="dark-input" required />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm uppercase font-bold mb-2 text-white">Message</label>
                                <textarea id="message" className="dark-input dark-textarea" required></textarea>
                            </div>

                            <button type="submit" className="w-full py-3 mt-4 text-white font-bold rounded-md transition duration-300 bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-500 focus:ring-opacity-50">
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="space-y-12 lg:border-l lg:border-gray-700 lg:pl-12 pt-8 lg:pt-0">
                        
                        <div className="space-y-6">
                            {contactDetails.map(({ Icon, text, id, align = 'center', href, target }) => (
                                <a 
                                    key={id} 
                                    href={href} 
                                    target={target || '_self'}
                                    className={`flex items-${align} space-x-4 clickable-item transition duration-150 text-white hover:text-sky-500`}
                                >
                                    <div className="icon-box rounded-md shrink-0 transition duration-150">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-white contact-text transition duration-150 text-base">
                                        {text}
                                    </span>
                                </a>
                            ))}
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contact;


