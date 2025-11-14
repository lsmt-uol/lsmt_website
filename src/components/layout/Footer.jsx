import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <hr className="border-gray-700 mb-4" />
      <p className="text-center mb-4">
        &copy; {new Date().getFullYear()} Your Website Name
      </p>
      <nav className="flex flex-wrap justify-center gap-6">
        <a href="tel:0000000000" className="flex items-center gap-2 hover:text-blue-500">
          <FontAwesomeIcon icon={faPhone} size="lg" />
          <span>0000000000</span>
        </a>
        <a href="mailto:info@company.co" className="flex items-center gap-2 hover:text-blue-500">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          <span>info@company.co</span>
        </a>
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1 hover:text-blue-500">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <span>Instagram</span>
          </a>
        </div>
      </nav>
    </footer>
  );
}

