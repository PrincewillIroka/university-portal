import React from "react";
import "./receiveInfo.css";

function ReceiveInfo() {
  return (
    <section className="receive-information-container">
      <img
        src="/images/more-information.svg"
        alt="More Information"
        className="more-information-img"
      />
      <div className="receive-information-content">
        <h3 className="receive-information-heading">
          RECEIVE MORE <br /> INFORMATION
        </h3>
        <h5 className="receive-information-heading2">
          Fill in the field below to receive
          <br />
          more information about our courses.
        </h5>
        <div className="receive-information-form">
          <input
            placeholder="Your email address"
            className="receive-information-input"
          />
          <button className="receive-information-button">Submit</button>
        </div>
      </div>
    </section>
  );
}

export default ReceiveInfo;
