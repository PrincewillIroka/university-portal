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
                <li className="admission-requirement-item">
                  <a href="#transcripts">Transcripts</a>
                </li>
                <li className="admission-requirement-item">
                  <a href="#proof-of-language">
                    Proof of English language proficiency
                  </a>
                </li>
                <li className="admission-requirement-item">
                  <a href="#academic-references">Academic references</a>
                </li>
                <li className="admission-requirement-item">
                  <a href="#resume">Curriculum vitae or resume</a>
                </li>
                <li className="admission-requirement-item">
                  <a href="#statement-of-purpose">
                    Research Statement/Statement of Purpose
                  </a>
                </li>
              </ul>
              <div className="admission-requirements-details">
                <div>
                  <h1 id="transcripts">Transcripts</h1>
                  <div>
                    Your official transcript is a complete record of all
                    academic information completed at the university. All
                    courses you've taken each semester at your previous
                    University will be included on your official transcript.
                  </div>
                  <div>
                    Applicants must possess a four-year degree from an
                    accredited university. The School of Graduate and
                    Postdoctoral Studies requires, at least, a 70% average
                    across courses taken in the last two full-time years of the
                    undergraduate degree.
                  </div>
                  <div>
                    If you are offered admission, you are required to provide
                    one official academic transcript from each post-secondary
                    institution you have attended.
                  </div>
                </div>
                <div>
                  <h1 id="proof-of-language">
                    Proof of English language proficiency
                  </h1>
                  <div>
                    <span>
                      Applicants whose first language is not English must
                      furnish evidence of their proficiency in the use of the
                      English language by a satisfactory* achievement within the
                      last two years in one of the following:
                    </span>
                    <ul className="admission-requirements-proof-of-language-list">
                      <li>
                        The Test of English as a Foreign Language (TOEFL). The
                        minimum acceptable score is 86, with no individual score
                        below 20 for the internet based version, or 550 for the
                        paper and pencil version, although some programs require
                        a higher minimum score.
                      </li>
                      <li>
                        The International English Language Testing Service
                        (IELTS). The minimum acceptable score is 6.5 out of 9.
                      </li>
                      <li>
                        The Duolingo English Test. Applicants must attain a
                        minimum score of 115.
                      </li>
                      <li>
                        The Canadian Academic English Language Assessment (CAEL
                        Assessment). The minimum acceptable score is 60. The
                        CAEL Assessment is offered in several countries
                        throughout the world. The requirement is successful
                        completion of the High-Advanced level.
                      </li>
                      <li>
                        Fanshawe College’s ESL Program. The requirement is
                        graduation from Level 10, English for Academic Purposes,
                        with a minimum 80% in all components.
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1 id="academic-references">Academic references</h1>
                  <div>
                    <ul className="academic-references-list">
                      <li className="academic-references-item">
                        A referee is a faculty member with whom you have studied
                        and is able to assess your potential for graduate level
                        study and research. References from non-academic
                        supervisors may be accepted in certain cases i.e.
                        professional references for professional programs.{" "}
                      </li>
                      <li className="academic-references-item">
                        Contact your referees before you apply online to confirm
                        their availability and their institutional or
                        professional email address. When you create an online
                        application, you will enter the names and email address
                        of your referees. Your referee will receive an automatic
                        email notification with instructions for accessing our
                        online recommendation system. Once the online
                        recommendation is submitted the department will have
                        access to view your online recommendation.
                      </li>
                      <li className="academic-references-item">
                        It is your responsibility to follow up with your
                        referees to ensure they have received the email and that
                        they submit the reference before the application
                        deadline. Referees may need to check their spam or junk
                        mail folders. Apply early to allow referees to submit
                        their recommendation by the deadline.
                      </li>
                    </ul>
                    <h4>Letters of Recommendation</h4>
                    <div>
                      When you enter the contact information of your references
                      in the "Recommendation requests" section of the
                      "Supplemental Items & Documents" tab, those individuals
                      will receive an automatic e-mail requesting that they
                      respond by submitting a response for your letters of
                      recommendation. Your application will remain incomplete
                      until all references have responded. In the
                      "Recommendation requests" section, you can check the
                      status of letters of recommendation, send reminders to
                      your references, or cancel requests and create new ones if
                      you need to replace a referee with someone new.
                    </div>
                  </div>
                </div>
                <div>
                  <h1 id="resume">Curriculum vitae or resume</h1>
                  <div>
                    <ul className="resume-list">
                      <li>
                        Your curriculum vitae or resume should be a one or two
                        page concise summary of your skills, experience and
                        education.
                      </li>
                      <li>
                        A curriculum vitae or resume is essentially your full
                        academic and professional profile. It should include a
                        summary of your educational and academic backgrounds as
                        well as teaching and research experience, publications,
                        presentations, awards, honours, affiliations and other
                        details.
                      </li>
                      <li>
                        Applicants will be required to upload a PDF copy of
                        their curriculum vitae or resume.
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1 id="statement-of-purpose">
                    Research Statement/Statement of Purpose
                  </h1>
                  <div>
                    <ul className="statement-of-purpose-list">
                      <li>
                        Statement of Purpose allows the graduate school to
                        assess your academic ability (preparation, capacity for
                        sustained research, awareness of current trends in the
                        research field, an already clear focus that matches
                        faculty interests in their department) and your personal
                        qualities (grit, creativity, discipline, motivation).
                      </li>
                      <li>
                        It allows you to show how you would be a unique
                        contributor and a strong match to the specific program
                        you are applying to. This can be expressed briefly
                        through narrative, but you should focus on the study
                        plan.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
