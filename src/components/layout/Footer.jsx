import React from 'react';
import { Instagram, Linkedin } from 'lucide-react'; 

const Footer = () => {
    
    const navLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Sponsors', href: '#' },
        { name: 'Moments', href: '#' },
    ];

    const socialIcons = [
        { Icon: Instagram, href: '#instagram', name: 'Instagram' }, 
        { Icon: Linkedin, href: '#linkedin', name: 'LinkedIn' }, 
    ];

    return (
        
        <footer className="bg-[#020716] text-white p-8 sm:p-12">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                
               
                <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-white hover:text-sky-500 transition duration-300 py-1"
                        >
                            {link.name}
                        </a>
                    ))}
                    {socialIcons.map((item, index) => (
                        <a 
                            key={index} 
                            href={item.href} 
                            className="text-white hover:text-sky-500 transition duration-300"
                            aria-label={item.name}
                        >
                            <item.Icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>

               
                <p className="text-sm text-white mt-4 text-center">
                    &copy; {new Date().getFullYear()} Leeds Sustainable Marine Team
                </p>
            </div>
        </footer>
    );
};

export default Footer;

