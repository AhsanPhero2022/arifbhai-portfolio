import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaCode, FaPaintBrush, FaBullhorn } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";
import Welcome from "./welcome";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ALL SERVICES", path: "/allServices" },
    { name: "MY SERVICES", path: "/myservice" },
    { name: "FAQ", path: "/faq" },
    { name: "ABOUT US", path: "/aboutUs" },
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <>
      <Welcome />
      <nav className="bg-base-300 shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold text-[#00838d]">LOGO</div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-6 font-semibold uppercase text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-cyan-500  rounded">
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Dropdown */}
              <li className="relative">
                <span
                  onClick={toggleDropdown}
                  className="hover:text-cyan-500 rounded cursor-pointer flex items-center gap-1"
                >
                  SERVICE CATEGORY
                  <FaAngleDown
                    className={`transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>

                {dropdownOpen && (
                  <ul
                    className="absolute top-8 mt-2 left-0 bg-white shadow rounded z-50 text-sm"
                    onClick={closeDropdown}
                  >
                    <li className="hover:bg-cyan-100 px-4 py-2 cursor-pointer flex items-center gap-2">
                      <FaCode /> Web Development
                    </li>
                    <li className="hover:bg-cyan-100 px-4 py-2 cursor-pointer flex items-center gap-2">
                      <FaPaintBrush /> Graphic Design
                    </li>
                    <li className="hover:bg-cyan-100 px-4 py-2 cursor-pointer flex items-center gap-2">
                      <FaBullhorn /> Marketing
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* 1 */}
              {user ? (
                <Link className="tooltip" data-tip="Edit Profile" to="/profile">
                  <img src={user.imageUrl} className="rounded-full w-8 h-8" />
                </Link>
              ) : (
                <Link className=" tooltip" data-tip="Sign Up" to="/register">
                  <FaUserCircle className="w-8 h-8 text-[#00838d]" />
                </Link>
              )}
              {/* 2 */}

              <Link to="/contactUs">
                <button className="hidden lg:inline-block bg-[#00838d] text-white px-4 py-2 rounded hover:bg-cyan-500 transition">
                  Contact Us
                </button>
              </Link>

              {/* Mobile Hamburger */}
              <div
                className="lg:hidden cursor-pointer transition duration-300 ease-in-out"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <svg
                    className="w-6 h-6 transform transition-transform duration-300 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 transform transition-transform duration-300 rotate-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden mt-2 space-y-2 pb-4 ${
                menuOpen
                  ? "max-h-screen opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 rounded hover:bg-cyan-200 uppercase font-semibold text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div>
                <span
                  onClick={toggleDropdown}
                  className="block px-3 py-2 rounded hover:bg-cyan-200 uppercase font-semibold text-sm cursor-pointer"
                >
                  SERVICE CATEGORY
                </span>
                {dropdownOpen && (
                  <ul className="ml-4 mt-1 bg-white shadow rounded text-sm">
                    <li className="hover:bg-cyan-100 px-4 py-2 cursor-pointer">
                      Web Development
                    </li>
                    <li className="hover:bg-cyan-100 px-4 py-2 cursor-pointer">
                      Graphic Design
                    </li>
                    <li className="hover:bg-cyan-100 px-4 py-2 cursor-pointer">
                      Marketing
                    </li>
                  </ul>
                )}
              </div>
              <Link
                to="/contactUs"
                className="block bg-[#00838d] text-white px-4 py-2 rounded hover:bg-cyan-500 transition"
                onClickCapture={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
