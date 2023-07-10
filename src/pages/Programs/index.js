import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./programs.css";
import { Header, Footer, ReceiveInfo } from "../Home/components";
import { PROGRAMS } from "../../data";
import { useStateValue } from "../../store";

function Programs() {
  const { state } = useStateValue();
  const [allPrograms, setAllPrograms] = useState(PROGRAMS);
  const [range, setRange] = useState({ start: 0, end: 12 });
  const navigate = useNavigate();
  const { isHeaderModalVisible = false } = state || {};

  const handleSetRange = (direction) => {
    let start = range.start;
    let end = range.end;
    if (direction === "prev") {
      if (start > 0) {
        start = start - 12;
        end = start + 12;
        setRange({ start, end });
      }
    } else {
      start = start + 12;
      end = start + 12;
      setRange({ start, end });
    }
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.trim();
    const allPrograms = PROGRAMS.filter((program) =>
      program.title.toLowerCase().includes(searchValue)
    );
    setAllPrograms(allPrograms);
  };

  const handleNavigation = (program) => {
    const { page = "" } = program;
    navigate(`/program/${page}`, { state: { program } });
  };

  return (
    <div
      className={`programs-container container-scroll-enabled ${
        isHeaderModalVisible && "container-scroll-disabled"
      }`}
    >
      <Header />
      <section className="programs-top-section">
        <div className="programs-top-section-content">
          <span className="programs-best-for-you-text">
            We have the best graduate programs.
          </span>
        </div>
      </section>
      <section className="programs-section-two">
        <h2 className="programs-courses-heading">Discover our courses</h2>
        <input
          placeholder="Search for a course"
          className="programs-search-input"
          onChange={handleSearch}
        />
        <span className="programs-courses-subheading">
          We have a wide range of programs suitable for your academic needs.
          These programs are tailored to exceed the expectations of those who
          enrol in them. Our hope is that you find them resourceful enough to
          engage/start once your mind is made up.
        </span>
        <div className="courses-catalogue-container">
          <div className="courses-catalogue-wrapper">
            {allPrograms.slice(range.start, range.end).map((program, index) => (
              <div
                className="course-single"
                key={index}
                onClick={() => handleNavigation(program)}
              >
                <img
                  src={`/images/programs/${program.image}`}
                  className="course-img"
                  alt="Program"
                />
                <div className="course-title-wrapper">
                  <span className="course-name">{program.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="programs-btn-container">
          <button
            className={`btn-navigate btn-prev ${
              range.start <= 0 && "btn-disabled"
            }`}
            onClick={() => handleSetRange("prev")}
            disabled={range.start <= 0}
          >
            Previous
          </button>
          <button
            className={`btn-navigate ${
              range.end >= PROGRAMS.length && "btn-disabled"
            }`}
            onClick={() => handleSetRange("next")}
            disabled={range.end >= PROGRAMS.length}
          >
            Next
          </button>
        </div>
      </section>
      <ReceiveInfo />
      <Footer />
    </div>
  );
}

export default Programs;
