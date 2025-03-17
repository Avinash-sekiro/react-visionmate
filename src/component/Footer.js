import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer mt-5 py-4 text-light">
      <div className="container">
        <div className="row">
          {/* Left - Logo & About */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <h4 className="fw-bold">VisionMate</h4>
            <p>Empowering visually impaired individuals with AI-driven assistive technology.</p>
          </div>

          {/* Center - Quick Links */}
          <div className="col-12 col-md-4 text-center">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#features" className="text-light text-decoration-none">Features</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Right - Contact & Social Media */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <h5 className="fw-bold">Contact</h5>
            <p className="mb-1">Email: info@VisionMate.com</p>
            <p className="mb-1">Phone: +91 9731652753</p>
            <p>Jayanagar 2nd Block</p>
            <div className="social-icons mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaFacebook size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaTwitter size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} VisionMate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
