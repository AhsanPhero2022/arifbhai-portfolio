import { Link } from "react-router-dom";
import Welcome from "./welcome";
import { FaUserCircle } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const { user } = useUser();

  const navitem = (
    <>
      <Link to="/">
        <li className="hover:text-orange-500">Home</li>
      </Link>
      <Link to="/allServices">
        <li className="hover:text-orange-500">All Services</li>
      </Link>
      <Link to="/serviceCategory">
        <li className="hover:text-orange-500">My Services</li>
      </Link>
      <Link to="/faq">
        <li className="hover:text-orange-500">FAQ</li>
      </Link>
      <Link to="/aboutUs">
        <li className="hover:text-orange-500">About us</li>
      </Link>
    </>
  );

  return (
    <div>
      <Welcome />
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="font-bold menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navitem}
            </ul>
          </div>
          <div>
            <ul className="font-bold  menu menu-horizontal hidden px-1 lg:flex gap-6">
              {navitem}
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          {user ? (
            <div data-tip="Edit Profile" className="tooltip w-10 h-10 mx-5">
              <Link to="/profile">
                <img src={user.imageUrl} className="rounded-full" />
              </Link>
            </div>
          ) : (
            <div data-tip="Sign Up" className="mx-5 tooltip">
              <Link to="/register">
                <FaUserCircle className="w-8 h-8 text-[#00838d]" />
              </Link>
            </div>
          )}

          <Link to="/contactUs">
            <button className="btn bg-[#00838d] border border-orange-400 hover:bg-orange-400 text-white">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
