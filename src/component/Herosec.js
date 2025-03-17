import React from 'react';
import img from "./img/hero.jpeg";
import { FaUserCircle } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles/nav.css";

export default function Herosec() {
  return (
    <div id="bm">
      
      {/* Navbar Section */}
      <section id="nav">
        <Navbar expand="lg" className="border-bottom border-dark-subtle"
          style={{ backgroundColor: "#5539AD" }}>
          <Container fluid>
            <Navbar.Brand href="#" className="text-white fs-2">VisionMate</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className="bg-light"/>
            <Navbar.Collapse id="navbarScroll">
              <Nav className="mx-auto my-2 my-lg-0 text-center d-lg-flex gap-lg-4">
                <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
                <Nav.Link href="#action2" className="text-white">About</Nav.Link>
                <Nav.Link href="#" className="text-white">Features</Nav.Link>
                <Nav.Link href="#" className="text-white">Contact us</Nav.Link>
                <Nav.Link href="#" className="text-white">Download</Nav.Link>
              </Nav>
              <div className='ms-auto fs-2 mb-1'><FaUserCircle/></div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      {/* Hero Section */}
      <section id="hero" className="d-flex align-items-center"
        style={{ backgroundColor: "#5539AD", minHeight: "90vh" }}>
        <Container>
          <div className="row align-items-center justify-content-between">
            
            {/* Left Side - Text & Buttons */}
            <div className="col-12 col-md-6 text-center text-md-start " data-aos="fade-right">
              <h1 className="fw-bold text-white">
                AI-powered vision assistant <br /> for enhanced independence
              </h1>
              <p className="mt-3 text-white">
                Helping visually impaired users navigate the world with ease using AI-driven assistance.
              </p>
              <div className="mt-4">
                <button type="button" className="btn btn-outline-light me-3 px-4 py-2">
                  Download Now
                </button>
                <button type="button" className="btn btn-light px-4 py-2">
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mt-4 mt-md-0" data-aos="fade-left">
              <img className="img-fluid img-thumbnail rounded" 
                src={img} 
                alt="Hero"
                style={{ maxWidth: "90%", height: "auto" }} />
            </div>
            
          </div>
        </Container>
      </section>
    
    </div>
  );
}
