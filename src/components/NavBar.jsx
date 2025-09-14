import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="logo">Dmitry Lean</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/works">Works</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/contact" className="btn-outline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
