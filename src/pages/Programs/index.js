import React from "react";
import "./programs.css";
import { Header } from "../Home/components";

function Programs() {
  return (
    <div className="programs-container">
      <Header />
      <section className="programs-top-section">
        <div className="programs-top-section-content">
          <span className="programs-best-for-you-text">
            We have the best programs for you
          </span>
        </div>
      </section>
      <section>
        <h2 className="discover-courses-heading">Discover our courses</h2>
      </section>
    </div>
  );
}

export default Programs;
