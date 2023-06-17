import React from "react";
import "./about.css";
import { Header } from "../Home/components";

function About() {
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
    </div>
  );
}

export default About;
