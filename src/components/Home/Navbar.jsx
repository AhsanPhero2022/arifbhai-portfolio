import { Link } from "react-router-dom";
import Welcome from "./welcome";
import search from "../../assets/search.png";

const Navbar = () => {
  const navitem = (
    <>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/buyAService">
        <li>Buy</li>
      </Link>
      <Link to="/propertyDetails">
        <li>Sell</li>
      </Link>

      <Link to="/aboutPage">
        <li>About us</li>
      </Link>
      <li>Services</li>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navitem}
            </ul>
          </div>
          <div>
            <ul className="menu menu-horizontal hidden px-1 lg:flex gap-6">
              {navitem}
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <div className="me-6 text-black">
            <img className="" src={search} alt="" />
          </div>
          <Link to="/login">
            <button className="btn btn-accent text-white">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
