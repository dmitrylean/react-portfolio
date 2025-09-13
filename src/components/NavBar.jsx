import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="logo">Dmitry Lean</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/works">Works</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Testimonial</a></li>
          <li><a href="#" class="btn-outline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;