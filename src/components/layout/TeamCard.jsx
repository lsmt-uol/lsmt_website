// src/components/TeamCard.jsx
import React from "react";

export default function TeamCard({ name, role, imageUrl, linkedin }) {
  return (
    <article className="bg-gray-800 rounded-2xl overflow-hidden shadow-md transform transition hover:scale-[1.02] duration-200">
      <div className="w-full h-56 bg-gray-700 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="text-gray-300 text-sm px-4">
            No image available
          </div>
        )}
      </div>

      <div className="p-4 text-center">
          <div className="flex items-start justify-center gap-2 mb-2 relative">
            <h3 className="text-lg font-semibold text-white wrap-break-word max-w-[85%]">
              {name}
            </h3>

            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                aria-label="LinkedIn Profile"
                className="shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5 text-[#0072B1] hover:brightness-125 transition"
                  fill="currentColor"
                >
                  <path d="M100.28 448H7.4V149.9h92.88zm-46.44-338C24.58 110 
                      0 85.42 0 54.14S24.58-1.7 53.84-1.7s53.82 24.58 
                      53.82 55.84c0 31.28-24.58 55.86-53.82 
                      55.86zm394.76 338h-92.68V302.4c0-34.7-.7-79.27-48.3-79.27
                      -48.3 0-55.7 37.7-55.7 76.64V448h-92.78V149.9h89.08v40.7h1.3
                      c12.4-23.5 42.62-48.3 87.7-48.3 93.8 0 111 61.8 
                      111 142.3V448z" />
                </svg>
              </a>
            )}
          </div>

          <p className="text-sm font-bold text-[#3b82f5]">{role}</p>
        </div>

    </article>
  );
}
