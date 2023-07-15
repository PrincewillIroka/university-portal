import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "./Home.css";
import { Header, Footer, ReceiveInfo } from "./components";
import { useStateValue } from "../../store";
import { WHAT_OUR_STUDENTS_SAY } from "../../data";

function Home() {
  const moreProgramsRef = useRef();
  const sectionTwoRef = useRef();
  const sectionThreeRef = useRef();
  const sectionFourRef = useRef();
  const { state } = useStateValue();
  const navigate = useNavigate();
  const { isHeaderModalVisible = false } = state || {};

  useEffect(() => {
    const elements = [
      { ref: sectionTwoRef, tag: "two" },
      { ref: sectionThreeRef, tag: "three" },
      { ref: sectionFourRef, tag: "four" },
    ];

    elements.forEach(({ ref, tag }) => {
      const sectionElement = ref.current;

      let observer = new IntersectionObserver(
        function (entries) {
          // isIntersecting is true when element and viewport are overlapping
          // isIntersecting is false when element and viewport don't overlap
          if (entries[0].isIntersecting === true) {
            console.log("Element 0 has just become visible in screen");
            sectionElement.classList.add(`section-${tag}-wrapper-animation`);
          }
        },
        { threshold: [1] }
      );

      observer.observe(sectionElement.parentElement);
    });
  }, [sectionTwoRef, sectionThreeRef, sectionFourRef]);

  const handleViewMoreFaculties = () => {
    const { scrollLeft, scrollWidth, offsetLeft, offsetWidth } =
      moreProgramsRef.current;

    let offset = 0;
    const currentScrollPosition = scrollLeft + offsetLeft;
    const num = scrollWidth - offsetWidth;
    if (scrollLeft >= num) {
      offset = -currentScrollPosition;
    } else {
      offset = currentScrollPosition;
    }

    moreProgramsRef.current.scroll({
      left: offset,
      behavior: "smooth",
    });
  };

  const handleExplore = () => {
    navigate("/programs");
  };

  return (
    <div
      className={`home-container container-scroll-enabled ${
        isHeaderModalVisible && "container-scroll-disabled"
      }`}
    >
      <Header />
      <section className="home-top-section">
        <div className="home-top-section-content">
          <div className="university-title-container">
            <span className="university-title-text">University </span>
            <span className="university-title-text">Portal </span>
          </div>
          <button className="btn-explore" onClick={handleExplore}>
            Explore
          </button>
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
      <section className="home-section-two">
        <div className="section-two-wrapper" ref={sectionTwoRef}>
          <div className="section-two-img-container">
            <img
              src="/images/university-entrance.svg"
              alt=""
              className="section-two-img"
            />
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
        </div>
      </section>
      <section className="home-section-three">
        <div className="section-three-wrapper" ref={sectionThreeRef}>
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
                alt="Science/Technology faculty"
                className="view-faculties-img"
              />
              <div className="view-faculties-overlay">
                <span className="faculty-title">Science/Technology</span>
              </div>
            </div>
            <div className="view-faculties-container">
              <img
                src="/images/cee-pgt.jpeg"
                alt="Engineering faculty"
                className="view-faculties-img"
              />
              <div className="view-faculties-overlay">
                <span className="faculty-title">Engineering</span>
              </div>
            </div>
            <div className="view-faculties-container">
              <img
                src="/images/arts-activities.jpeg"
                alt="Arts faculty"
                className="view-faculties-img"
              />
              <div className="view-faculties-overlay">
                <span className="faculty-title">Arts</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section-four">
        <div className="section-four-wrapper" ref={sectionFourRef}>
          <div className="what-students-say-col-1">
            <h3 className="what-students-say-heading">WHAT OUR STUDENTS SAY</h3>
            {WHAT_OUR_STUDENTS_SAY.slice(0, 1).map((obj, index) => (
              <div className="what-students-say-content" key={index}>
                <div className="what-students-say-content-row">
                  <img
                    src={`/images/what-our-students-say/${obj.img}`}
                    alt="Student"
                    className="what-students-say-photo"
                  />
                  <div className="what-students-say-profile">
                    <span className="what-students-say-name">{obj.name}</span>
                    <span className="what-students-say-graduated">
                      {obj.graduated}
                    </span>
                  </div>
                </div>
                <span className="what-students-say-description">
                  {obj.description}
                </span>
              </div>
            ))}
            <div className="what-students-say-nav-row">
              <BsArrowLeft className="what-students-say-arrows" />
              <BsArrowRight className="what-students-say-arrows what-students-say-arrows-is-allowed" />
            </div>
          </div>
          <div className="what-students-say-col-2">
            <img
              src="/images/what-our-students-say/medium-shot-student-holding-books.jpg"
              alt="Student"
              className="what-students-say-hero-img1"
            />
            <div className="what-students-say-detailed-col">
              <div className="where-our-students-work-container">
                <h4 className="what-students-say-detailed-heading">
                  Where our students work
                </h4>
                <span className="what-students-say-detailed-info">
                  Our students work in the best institutions all over the world.
                  Top global firms like JP Morgan, Google, KPMG, Facebook,
                  Apple, Tesla, Arlbemade e.t.c have alumni who finished from
                  our university.
                </span>
              </div>
              <div className="entrepreneurship-container">
                <h4 className="what-students-say-detailed-heading">
                  Entrepreneurial Studies
                </h4>
                <span className="what-students-say-detailed-info">
                  We have a great pedigree in teaching entrepreneurial studies
                  to students in our institution. From the first semester up
                  till the last, we inculcate valuable tutorials to enable them
                  thrive in starting businesses after they graduate.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReceiveInfo />
      <Footer />
    </div>
  );
}

export default Home;
