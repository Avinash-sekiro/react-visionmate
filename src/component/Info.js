import React from "react";
import "./styles/info.css";
import img from "./img/info.jpeg";

export default function Info() {
  return (
    <section id="info">
      <div className="info-container">
        <div className="info-text" data-aos="zoom-in-right">
          <h2>POWERED BY ADVANCED AI TECHNOLOGY</h2>
          <p>
            Our cutting-edge AI processes visual information in real time, providing accurate and realistic assistance.
          </p>
          <div className="info-grid">
            <div>
              <h4>✔ Detective Accuracy</h4>
              <h4>✔ Privacy Protection</h4>
              <h4>✔ Real-Time Alerts</h4>
            </div>
            <div>
              <h4>✔ Less than 25ms Response Time</h4>
              <h4>✔ 24/7 Availability</h4>
            </div>
          </div>
        </div>

   
        <div className="info-image" data-aos="zoom-in-left">
          <img src={img} alt="AI Technology" />
        </div>
      </div>
    </section>
  );
}
