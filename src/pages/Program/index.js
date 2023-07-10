import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Header, Footer, ReceiveInfo } from "../Home/components";
import "./Program.css";

function Program() {
  const { state: locationState } = useLocation();
  const [activeItem, setActiveItem] = useState(0);
  const { program = {} } = locationState || {};

  return (
    <div className="program-container">
      <Header />
      <section className="program-section-one">
        <span className="program-title-heading">{program.title}</span>
        <div className="program-title-small">
          <span className="program-title-small-1">Diploma</span>/
          <span className="program-title-small-2">Full-time</span>/
          <span className="program-title-small-3">{program.faculty}</span>
        </div>
      </section>
      <section className="program-section-two">
        <div className="program-section-two-row-header">
          <div
            onClick={() => setActiveItem(0)}
            className={`program-item-single ${
              activeItem === 0 && "program-item-single-active"
            }`}
          >
            Admission Requirements
          </div>
          <div
            onClick={() => setActiveItem(1)}
            className={`program-item-single ${
              activeItem === 1 && "program-item-single-active"
            }`}
          >
            Program Details
          </div>
          <div
            onClick={() => setActiveItem(2)}
            className={`program-item-single ${
              activeItem === 2 && "program-item-single-active"
            }`}
          >
            Apply Now
          </div>
        </div>
        <div className="program-section-two-row-body">
          {activeItem === 0 ? (
            <div className="admission-requirements-section">
              <ul className="admission-requirements-list">
                <li className="admission-requirement-item">Transcripts</li>
                <li className="admission-requirement-item">
                  Proof of English language proficiency{" "}
                </li>
                <li className="admission-requirement-item">
                  Academic references
                </li>
                <li className="admission-requirement-item">
                  Curriculum vitae or resume{" "}
                </li>
                <li className="admission-requirement-item">
                  Research Statement/Statement of Purpose
                </li>
              </ul>
            </div>
          ) : activeItem === 1 ? (
            <div>
              <div>
                The master's and doctoral programs in computer science offer
                students high quality, cutting-edge research opportunities and
                supervision by world leaders in their respective fields.
                Graduates of our program have gone on to work for industry
                leading companies such as HP Labs and Pixar Animation Studios.
              </div>
              <div>
                Our master's program is ideally suited to students wishing to
                become senior professionals in the technology industry or to
                those seeking to prepare for a career in scientific research.
                Graduates of this program often become senior programmers or
                project leaders at companies that develop commercial software or
                game design studios.
              </div>
              <div>
                Our doctoral program provides students with intensive training
                in the scientific enterprise for those wishing to pursue
                academic or industrial research careers. Graduates of this
                program are qualified to seek positions in the research and
                development units of large technology companies or to pursue
                independent research careers as university professors.
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
      <ReceiveInfo />
      <Footer />
    </div>
  );
}

export default Program;
