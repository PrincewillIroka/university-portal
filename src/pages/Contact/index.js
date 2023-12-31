import GoogleMapReact from "google-map-react";
import "./contact.css";
import { Header, Footer, ReceiveInfo } from "../Home/components";
import { useStateValue } from "../../store";

function Contact() {
  const { state } = useStateValue();
  const { isHeaderModalVisible = false } = state || {};
  const mapProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 20,
  };

  return (
    <div
      className={`contact-container container-scroll-enabled ${
        isHeaderModalVisible && "container-scroll-disabled"
      }`}
    >
      <Header />
      <section className="contact-top-section">
        <div className="contact-top-section-content">
          <span className="contact-best-for-you-text">
            Reach out to us, to make an inquiry
          </span>
        </div>
      </section>
      <section className="contact-section-two">
        <div className="contact-section-two-content">
          <div className="contact-col-1">
            <h2 className="contact-heading">Contact Us</h2>
            <input placeholder="Name" className="contact-input-field" />
            <input placeholder="Email" className="contact-input-field" />
            <textarea className="contact-textarea" placeholder="Type message here..."></textarea>
            <button className="contact-btn">Send</button>
          </div>
          <div className="contact-col-2">
            <address>123 New Drive Layout, Good Road, One Province</address>
            <span>campus@universityportal.com</span>
            <span>(41) 23456789</span>
            <div className="contact-map">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={mapProps.center}
                defaultZoom={mapProps.zoom}
                yesIWantToUseGoogleMapApiInternals
              ></GoogleMapReact>
            </div>
          </div>
        </div>
      </section>
      <ReceiveInfo />
      <Footer />
    </div>
  );
}

export default Contact;
