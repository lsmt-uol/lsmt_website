import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#Introduction", label: "About Us" },
    { href: "#Team", label: "Team" },
    { href: "#Projects", label: "Projects" },
    { href: "#Moments", label: "Moments" },
  ];

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto h-14 sm:h-16 md:h-16 lg:h-16 flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <div className="flex items-center space-x-2">
            <img
              src="src/assets/logo.jpg"
              alt="LSMT Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-12"
            />
            <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">
              LSMT
            </span>
          </div>
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                text-gray-300
                text-sm sm:text-base md:text-base lg:text-lg
                px-3 py-2 rounded-lg
                transition-all duration-200
                hover:bg-white hover:text-blue-600
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden absolute right-4 p-2 text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <div
          className={`md:hidden bg-black overflow-hidden transition-all duration-300 ${
            open ? "max-h-56 py-2" : "max-h-0 py-0"
          } absolute top-full left-0 w-full`}
        >
          <div className="px-4 space-y-1">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  block text-gray-300
                  text-base py-2 px-3 rounded-md
                  transition-all duration-200
                  hover:bg-white hover:text-blue-600
                "
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

