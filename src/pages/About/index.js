import React from "react";
import "./about.css";
import { Header } from "../Home/components";

function About() {
  return (
    <div className="about-container">
      <Header />
      <div>
        <section className="about-top-section">
          <div className="about-top-section-content">
            <span className="about-us-info">We are a prestigious institution</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
