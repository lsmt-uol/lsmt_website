export default function Conta() {
  return (
    <section className="py-18 bg-linear-to-t from-gray-900 via-black to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* MAIN HEADING */}
        
         <h2 className="text-4xl font-bold text-[#3b82f5] text-center">GET IN TOUCH</h2>
         <div className="bg-white w-70 h-0.5 mx-auto my-2 mb-7"></div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          
          {/* IMAGE & CONTACT INFO */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-full">
              <img
                src="https://yacht-club-monaco.mc/wp-content/uploads/2024/10/MEBC240705ff_05718_.jpg"
                className="w-full h-full object-cover lg:rounded-l-2xl rounded-2xl opacity-80"
                alt="Contact Us"
              />
              <h1 class="font-sans text-[#020716] justify-center text-5xl font-bold leading-10 absolute top-11 left-7">CONTACT US</h1>

              {/* CARD */}
              <div className="absolute bottom-0 w-full lg:p-10 p-5">
                <div className="bg-linear-to-b from-gray-900 via-black to-gray-900 rounded-xl p-6 w-full">
                  
                  {/* PHONE */}
                  <div className="flex items-center mb-6">
                    <svg width="26" height="26" fill="none" stroke="#3b82f5" strokeWidth="2" viewBox="0 0 30 30">
                      <path d="M22.3 18.3c-.3-.1-.4-.2-.6-.2-.2 0-.3 0-.6.1l-3.3.7c-.4.1-.6.1-.8.1-.2 0-.4-.1-.7-.3-2.5-1.4-4.2-3-5.2-5.3-.1-.2-.2-.4-.3-.6 0-.2 0-.4.1-.7l.6-3.4c0-.3.1-.4 0-.6 0-.2-.1-.3-.2-.7l-.9-2.3c-.2-.7-.3-1-.5-1.1-.3-.2-.6-.2-1.4-.2H5.9C4.6 3.8 3.6 4.8 3.8 6c.5 3.1 1.9 8.8 6 12.9 4.3 4.3 10.4 6.1 13.8 6.9 1.3.3 2.5-.7 2.5-2v-2.5c0-.7 0-1.1-.2-1.4-.2-.3-.5-.4-1.2-.7l-2.4-.9z"/>
                    </svg>
                    
                    <p className="text-white text-base ml-4">
                      <a href="tel:+44">+44 78422 52735</a>

                    </p>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-center mb-6 break-all">
                    <svg width="26" height="26" fill="none" stroke="#3b82f5" strokeWidth="2" viewBox="0 0 30 30">
                      <path d="M2.8 8.8l7.4 4.9c2.6 1.6 3.9 2.4 5.3 2.3 1.5 0 2.8-.8 5.4-2.5L27.2 8.8"/>
                      <path d="M12.5 25h5c4.7 0 7 0 8.5-1.5S27.5 19.7 27.5 15c0-4.7 0-7-1.5-8.5S22.2 5 17.5 5h-5C7.8 5 5.4 5 3.9 6.5S2.5 10.3 2.5 15c0 4.7 0 7 1.4 8.5C5.4 25 7.8 25 12.5 25z"/>
                    </svg>
                    <p className="text-white text-base ml-4 break-all">
                      <a href="mailto:leedssustainablemarineteam@gmail.com">leedssustainablemarineteam@gmail.com</a> 
                    </p>
                  </div>

                  {/* ADDRESS */}
                  <div className="flex items-center">
                    <svg width="26" height="26" fill="none" stroke="#3b82f5" strokeWidth="2" viewBox="0 0 30 30">
                      <path d="M25 12.9c0 4.8-3.8 8.7-6.7 12-1.4 1.7-2.1 2.5-3.3 2.5-1.2 0-2-0.8-3.4-2.5C8.8 21.6 5 17.7 5 12.9 5 10.2 6 7.5 7.9 5.6 9.8 3.6 12.3 2.5 15 2.5c2.7 0 5.2 1.1 7.1 3.1 1.9 1.9 2.9 4.6 2.9 7.3z"/>
                      <circle cx="15" cy="11.6" r="2.9"/>
                    </svg>
                    <p className="text-white text-base ml-4 break-all">
                      <a href="https://maps.app.goo.gl/oAVNFS6jgtKcCtk87" target="_blank">
                      University of Leeds, Leeds, LS3 1LN
                      </a>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="order-1 lg:order-2 bg-linear-to-b from-black to-gray-900 p-6 lg:p-10 rounded-2xl lg:rounded-l-2xl lg:rounded-r-2xl">
            
            <input id="name" className="w-full h-12 bg-transparent border border-gray-500 rounded-full pl-4 text-white mb-6 placeholder-gray-400" placeholder="Name"/>
            
            <input id="email" className="w-full h-12 bg-transparent border border-gray-500 rounded-full pl-4 text-white mb-6 placeholder-gray-400" placeholder="Email"/>
            
            <input id="phone" className="w-full h-12 bg-transparent border border-gray-500 rounded-full pl-4 text-white mb-6 placeholder-gray-400" placeholder="Phone"/>

            <textarea className="w-full h-28 bg-transparent border border-gray-500 rounded-2xl p-4 text-white mb-8 placeholder-gray-400 resize-none" placeholder="Message"/>

            <button className="w-full h-12 bg-[#3b82f5] hover:bg-blue-700 rounded-full text-white font-semibold transition">
              Send Message
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
