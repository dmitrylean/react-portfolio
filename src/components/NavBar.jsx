import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <Link to="/" className="logo">Dmitry Lean</Link>
      <nav>
        <ul>
          <li><Link to="/works">Works</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/contact" className="btn-outline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
