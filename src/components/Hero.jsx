import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Hi, I’m <span className="highlight">Dmitry</span>
          <br />
          <span className="big">React-developer</span>
          <br />
          <span className="muted">JS / PHP / Python</span>
        </h1>
        <button className="btn-primary">Hire Me</button>
      </div>
    </section>
  );
};

export default Hero;