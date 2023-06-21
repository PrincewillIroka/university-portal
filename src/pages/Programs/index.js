import "./programs.css";
import { Header, Footer, ReceiveInfo } from "../Home/components";
import { PROGRAMS } from "../../data";
import { useStateValue } from "../../store";

function Programs() {
  const { state } = useStateValue();
  const { isHeaderModalVisible = false } = state || {};

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
            We have the best programs for you
          </span>
        </div>
      </section>
      <section className="programs-section-two">
        <h2 className="programs-courses-heading">Discover our courses</h2>
        <input
          placeholder="Search for a course"
          className="programs-search-input"
        />
        <span className="programs-courses-subheading">
          We have a wide range of programs suitable for your academic needs.
          These programs are tailored to exceed the expectations of those who
          enrol in them. Our hope is that you find them resourceful enough to
          engage/start once your mind is made up.
        </span>
        <div className="courses-catalogue-container">
          <div className="courses-catalogue-wrapper">
            {PROGRAMS.map((program) => (
              <div className="course-single">{program.name}</div>
            ))}
          </div>
        </div>
      </section>
      <ReceiveInfo />
      <Footer />
    </div>
  );
}

export default Programs;
