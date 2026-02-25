import dassaultLogo from "../../assets/dassault_systemes.jpg";
import gombocLogo from "../../assets/gomboc.jpg";

export default function Sponsors() {
  const sponsors = [
    { name: "Dassault Systemes", src: dassaultLogo },
    { name: "Gomboc", src: gombocLogo },
  ];

  return (
    <section className="py-26 bg-linear-to-t from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3b82f5] tracking-tight">OUR SPONSORS</h2>
          <div className="bg-white w-60 h-0.5 mx-auto my-2"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our progress is made possible through the invaluable support of our partners 
            who share our vision for engineering excellence.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {sponsors.map((sponsor, index) => (
            sponsor.src && (
              <div 
                key={index} 
                className="transition-transform duration-300 hover:scale-105"
                style={{
                  ...styles.logoWrapper,
                  backgroundColor: sponsor.name === "Gomboc" ? "#FFFFFF" : "rgba(255, 255, 255, 0.03)"
                }}
              >
                <img 
                  src={sponsor.src} 
                  alt={sponsor.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  logoWrapper: {
    padding: "30px",
    borderRadius: "16px",
    width: "300px",
    height: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  }
};