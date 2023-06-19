import React, { useState } from "react";
import "./about.css";
import { Header, Footer, ReceiveInfo } from "../Home/components";

const FAQ_QUESTIONS = [
  {
    question: "How can I gain admission into the university ?",
    answer: `
  Step 1: Finding the right program Step 2: Application to Faculty
              Step 3: Receiving the Conditional Acceptance Letter Step 4:
              Receiving the unconditional Acceptance Letter Step 5: Obtaining
              Visa Step 6: Accommodation
  `,
  },
  {
    question: "When can I apply for  program ?",
    answer:
      "You can apply throughout the year for any program of your choice, we'll do well to reach out to you for proper follow-up",
  },
  {
    question: "What are the requirements for an MSc program ?",
    answer:
      "The first requirement is a BSc in course related to the one you want to study. Then you also need to have your transcript and other relevant documents ready for whenever we ask for them.",
  },
];

function About() {
  const [activeAnswer, setActiveAnswer] = useState();

  const handleSetAnswer = (value) => {
    const newActiveAnswer = activeAnswer === value ? "" : value;
    setActiveAnswer(newActiveAnswer);
  };

  return (
    <div className="about-container">
      <Header />
      <section className="about-top-section">
        <div className="about-top-section-content">
          <span className="about-us-info">
            We are a prestigious institution
          </span>
        </div>
      </section>
      <section className="about-section-two">
        <div className="about-section-two-row-1">
          <div className="about-section-two-rendition">
            Do you like innovation, creativity and entrepreneurship? The
            Publicity and Propaganda course can be the form of expression you
            find to communicate with the world! The advertising profession
            serves to publicize ideas, products or services. And for that you
            will need to learn how to research the target audience profile,
            their consumption habits, customs and demographic data; develop
            approach, creative line and appropriate means of communication for
            campaigns; creation of texts and images; analysis of impacts and
            returns of actions.
            <br />
            You can work in customer service, creation, product and brand
            management, marketing, media, research, production and sales
            promotion in advertising agencies, companies from different segments
            or as a freelancer or entrepreneur.
            <br />
            Our courses offer pedagogical and curricular innovations such as a
            flexible semester-long curriculum, experiences in university
            extension providing direct contact with the needs of the community,
            common cores, shared disciplines and diversified teaching and
            learning methodologies.
          </div>
          <div></div>
        </div>
        <div className="about-section-two-rendition-2">
          As you embark on your journey at our University, we urge you to make
          the most of the opportunities for the best experiences of your future
          career!
        </div>
      </section>
      <section className="about-section-three">
        <img
          src="/images/about/vc.svg"
          className="vc-img"
          alt="Vice Chancellor"
        />
        <div className="vc-details-container">
          <span className="vc-name">Carolina Silva</span>
          <span className="vc-title">Vice Chancellor</span>
          <span className="vc-speech">
            The core values have projected the image of this institution as a
            centre for learning and character moulding of our students. The core
            values also depict the vision of our University which is to nurture
            a University of high international standard so that the quality of
            the institution is rated the best in the world.
          </span>
          <span className="vc-speech">
            Our policies are geared towards instituting e-learning and
            governance in administration. Efforts are being made towards human
            capital development for effectiveness and efficiency in our service
            delivery. I therefore implore all students to ensure that they avail
            themselves and make the best use of the facilities provided by the
            University to acquire these skills and competences before
            graduation.
          </span>
        </div>
      </section>
      <section className="about-section-four">
        <div className="about-section-four-content">
          <div className="staff-container">
            <img
              src="/images/about/staff-1.svg"
              className="staff-img staff-img-align-left"
            />
            <div className="staff-details-container staff-details-container-left staff-details-container-1">
              <div className="staff-details-wrapper">
                <div className="staff-details-content staff-details-content-left staff-details-content-color-1">
                  <span className="staff-name">Juliano Pereria</span>
                  <span className="staff-title">Professor</span>
                  <span className="staff-info">
                    We do our best to ensure that students are taught with
                    utmost care.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="staff-container">
            <div className="staff-details-container staff-details-container-right staff-details-container-2">
              <div className="staff-details-wrapper">
                <div className="staff-details-content staff-details-content-right staff-details-content-color-2">
                  <span className="staff-name">Eduarda Rocha</span>
                  <span className="staff-title">Professor</span>
                  <span className="staff-info">
                    We do our best to ensure that students are taught with
                    utmost care.
                  </span>
                </div>
              </div>
            </div>
            <img
              src="/images/about/staff-2.svg"
              className="staff-img staff-img-align-right"
            />
          </div>
          <div className="staff-container">
            <img
              src="/images/about/staff-3.svg"
              className="staff-img staff-img-align-left"
            />
            <div className="staff-details-container staff-details-container-left staff-details-container-2">
              <div className="staff-details-wrapper">
                <div className="staff-details-content staff-details-content-left staff-details-content-color-2">
                  <span className="staff-name">Rafael Almeida</span>
                  <span className="staff-title">Assistant Professor</span>
                  <span className="staff-info">
                    We do our best to ensure that students are taught with
                    utmost care.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="staff-container">
            <div className="staff-details-container staff-details-container-right staff-details-container-1">
              <div className="staff-details-wrapper">
                <div className="staff-details-content staff-details-content-right staff-details-content-color-1">
                  <span className="staff-name">Fabiana Melo</span>
                  <span className="staff-title">Assistant Professor</span>
                  <span className="staff-info">
                    We do our best to ensure that students are taught with
                    utmost care.
                  </span>
                </div>
              </div>
            </div>
            <img
              src="/images/about/staff-4.svg"
              className="staff-img staff-img-align-right"
            />
          </div>
        </div>
      </section>
      <section className="about-section-five">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        {FAQ_QUESTIONS.map((faq) => (
          <div className="faq-single">
            <div className="faq-row">
              <span className="faq-question">{faq.question}</span>
              <span
                className="faq-plus-icon"
                onClick={() => handleSetAnswer(faq.question)}
              >
                &#43;
              </span>
            </div>
            <span
              className={`faq-answer ${
                activeAnswer === faq.question && "faq-answer-active"
              }`}
            >
              {faq.answer}
            </span>
          </div>
        ))}
      </section>
      <ReceiveInfo />
      <Footer />
    </div>
  );
}

export default About;
