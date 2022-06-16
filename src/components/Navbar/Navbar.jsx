import React from "react";
import { Link , NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar bg-primary text-light pt-3">
        <ul className="w-25 d-flex justify-content-around list-unstyled">
          <li>
            <NavLink className={({isActive})=> isActive ? "text-dark" : "text-light"} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> isActive ? "text-dark" : "text-light "}  to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> isActive ? "text-dark" : "text-light"} to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> isActive ? "text-dark" : "text-light"} to="/news">
              News
            </NavLink>
          </li>
          <li>
            <Link className={({isActive})=> isActive ? "text-dark" : "text-light"} to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
