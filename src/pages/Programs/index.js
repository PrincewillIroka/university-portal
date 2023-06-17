import React from "react";
import "./programs.css";
import { Header } from "../Home/components";

function Programs() {
  return (
    <div className="programs-container">
      <Header />
      <div>
        <section className="programs-top-section">
          <div className="programs-top-section-content">
            <span className="programs-us-info">
              We have the best programs for you
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Programs;
