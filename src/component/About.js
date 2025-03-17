import React from "react";
import "./styles/about.css"; 
import aboutImg from "./img/about.jpeg";
export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          
         
          <div className="col-12 col-md-6 text-center"  data-aos="zoom-out-right">
            <img
              src={aboutImg}
              alt="About Our Company"
              className="img-fluid rounded shadow"
            />
          </div>

          
          <div className="col-12 col-md-6 text-center text-md-start mt-4 mt-md-0"  data-aos="zoom-out-left">
            <h2 className="fw-bold text-primary">About Our Company</h2>
            <p className="text-secondary mt-3">
              We are committed to revolutionizing accessibility with AI-driven assistive 
              technologies, ensuring inclusivity for all users.
            </p>
            <p className="text-secondary">
              Our mission is to enhance daily interactions through cutting-edge 
              voice assistance, object detection, and real-time navigation.
            </p>
            <p className="text-secondary">
              With advanced AI, we provide seamless, real-time assistance for safer 
              and more independent living.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
