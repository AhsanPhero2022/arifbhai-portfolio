import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* 1. Logo Section */}
        <div>
          <h1 className="text-2xl font-bold uppercase">Dream Tech Zone</h1>
          <p className="text-sm mt-2 text-white">
            Building high-quality digital products for the web.
          </p>
        </div>

        {/* 2. Company Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-cyan-500">Company</h2>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allServices">All Services</Link>
            </li>
            <li>
              <Link to="/myServices">My Services</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* 3. Policy Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-cyan-500">Legal</h2>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </li>
          </ul>
        </div>

        {/* 4. Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-cyan-500">
            Follow Us
          </h2>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-200 mt-10 border-t border-gray-800 pt-4 ">
        © 2025 Dream Tech Zone. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
