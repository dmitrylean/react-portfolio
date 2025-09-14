import React from "react";
import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-grid">

          <div className="services-left">
            <h2>Services</h2>
          </div>

          <div className="services-right">
            <div className="service-card">
              <span className="number">01</span>
              <h3>Web Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>

            <div className="service-card">
              <span className="number">02</span>
              <h3>Web Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>

            <div className="service-card">
              <span className="number">03</span>
              <h3>Branding</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
