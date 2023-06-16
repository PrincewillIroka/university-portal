import React, { useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import "./home.css";
import Logo from "../../assets/Logo.svg";
import UniversityEntrance from "../../assets/UniversityEntrance.svg";

function Home() {
  const moreProgramsRef = useRef();

  const handleViewMoreFaculties = () => {
    const { scrollLeft, offsetWidth, offsetLeft } = moreProgramsRef.current;

    let offset = 0;
    const currentScrollPosition = scrollLeft + offsetLeft;

    if (currentScrollPosition >= offsetWidth) {
      offset = -currentScrollPosition;
    } else {
      offset = scrollLeft + 320;
    }

    moreProgramsRef.current.scroll({
      left: offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-container">
      <header className="header">
        <img src={Logo} className="logo" alt="Logo" />
        <ul className="nav-container">
          <li className="nav-link">
            <a href="/home">Home</a>
          </li>
          <li className="nav-link">
            <a href="/about">About</a>
          </li>
          <li className="nav-link">
            <a href="/programs">Programs</a>
          </li>
          <li className="nav-link">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <BiSearch className="search-icon" />
      </header>
      <section>
        <section className="top-section">
          <div className="top-section-content">
            <div className="university-title">
              <span>University</span>
              <span>Portal</span>
            </div>
            <button className="btn-explore">Explore</button>
            <div className="stat-container">
              <div className="stat-item">
                <span className="stat-number">80+</span>
                <span className="stat-info">available programs</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3650+</span>
                <span className="stat-info">active students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10/10</span>
                <span className="stat-info">postive ratings</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50000</span>
                <span className="stat-info">alumnus</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section-two">
          <div className="section-two-img-container">
            <img src={UniversityEntrance} alt="" className="section-two-img" />
          </div>
          <div className="section-two-right-container">
            <h3 className="welcome-heading">WELCOME TO OUR UNIVERSITY</h3>
            <span className="welcome-description">
              We are a reference University in the South region, with a wide
              structure, qualified professors and courses recognized by the MEC,
              we provide teaching, research and extension activities in the most
              diverse areas of knowledge.
            </span>
            <button className="welcome-btn">Continue</button>
          </div>
        </section>
        <section className="section-three">
          <div className="section-three-col-1">
            <h3 className="know-our-courses-heading">
              FIND OUT <br />
              ABOUT OUR <br /> FACULTIES
            </h3>
            <h5 className="know-our-courses-info">
              A universe of opportunities.
            </h5>
            <div
              className="check-out-container"
              onClick={handleViewMoreFaculties}
            >
              <span className="check-out-heading">View more</span>
              <BsArrowRight className="check-out-icon" />
            </div>
          </div>
          <div className="section-three-col-2" ref={moreProgramsRef}>
            <div className="view-faculties-container">
              <img
                src="/images/chula-faculty-education-hero-desktop.jpeg"
                alt="Education faculty"
                className="view-faculties-img"
              />
              <div className="view-faculties-overlay">
                <span className="faculty-title">Education</span>
              </div>
            </div>
            <div className="view-faculties-container">
              <img
                src="/images/sc-lab.jpeg"
                alt=""
                className="view-faculties-img"
              />
              <div className="view-faculties-overlay">
                <span className="faculty-title">Science/Technology</span>
              </div>
            </div>
            <div className="view-faculties-container">
              <img
                src="/images/cee-pgt.jpeg"
                alt=""
                className="view-faculties-img"
              />
              <div className="view-faculties-overlay">
                <span className="faculty-title">Engineering</span>
              </div>
            </div>
            <div className="view-faculties-container">
              <img src="/images/arts-activities.jpeg" alt="" className="view-faculties-img" />
              <div className="view-faculties-overlay">
                <span className="faculty-title">Arts</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section-four">
          <div className="">
            <h3>WHAT OUR STUDENTS SAY</h3>
          </div>
        </section>
        <footer className="footer">
          <span>University Portal &copy; 2023</span>
        </footer>
      </section>
    </div>
  );
}

export default Home;
