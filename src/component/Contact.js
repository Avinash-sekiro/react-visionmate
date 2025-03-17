import React from 'react';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

export default function Contact() {
  return (
    <section id="Contact" className="py-5">
      <div className="container" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
        <div className="row justify-content-center align-items-center">
          
          <div className="col-12 col-md-6">
            <h2 className="text-center text-md-start mb-4">Contact Us</h2>

            <form>
            
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Your Name" />
                <label htmlFor="floatingInput">Your Name</label>
              </div>

              
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="Email" />
                <label htmlFor="floatingEmail">Email</label>
              </div>

              
              <div className="form-floating mb-3">
                <textarea className="form-control" id="floatingMessage" placeholder=" " style={{ height: "120px" }}></textarea>
                <label htmlFor="floatingMessage">Message</label>
              </div>

             
              <div className="d-grid">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>

          
          <div className="col-12 col-md-5 d-flex flex-column align-items-md-center align-items-center text-md-start text-center">
            <h2 className="mb-4">Contact Information</h2>
            <p><CiMail className="me-2" size={20} /> info@VisionMate.com</p>
            <p><FaPhoneAlt className="me-2" size={20} /> +91 9731652753</p>
            <p><CiLocationOn className="me-2" size={20} /> Jayanagar 2nd Block</p>
          </div>
        </div>
      </div>
    </section>
  );
}
