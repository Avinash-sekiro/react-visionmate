import React from "react";
import "./styles/feature.css";
import a2 from "./img/1.jpeg";
import a3 from "./img/2.jpeg";
import a4 from "./img/3.jpeg";
import a5 from "./img/4.jpeg";
import a6 from "./img/5.jpeg";
import a7 from "./img/6.jpeg";

// Reusable Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="card feature-card mx-3 my-3" data-aos="zoom-in-up" >
      <img src={icon} className="card-img-top feature-icon" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

// Feature Section
export default function Feature() {
  const features = [
    {
      icon: a2,
      title: "Voice Assistance",
      description: "Provides spoken feedback, enabling interaction via voice commands.",
    },
    {
      icon: a3,
      title: "Object Detection",
      description: "Identifies obstacles and objects for safer navigation.",
    },
    {
      icon: a4,
      title: "AR-Based Navigation",
      description: "Augmented Reality for real-time direction guidance.",
    },
    {
      icon: a5,
      title: "Text-to-Speech (TTS)",
      description: "Reads aloud books, documents, and web pages.",
    },
    {
      icon: a6,
      title: "Face Recognition",
      description: "Identifies people and provides contextual information.",
    },
    {
      icon: a7,
      title: "Real-Time Alerts",
      description: "Instant notifications for events or hazards.",
    },
  ];

  return (
    <section id="feature">
      <div className="container">
        <h2 className="text-center">Features</h2>
        <hr className="mx-auto" />
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
