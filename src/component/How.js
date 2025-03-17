import React from 'react';


const Guide = ({ number, title, info }) => {
  return (
    <div className="text-center p-3">
      <div className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center mx-auto mb-3" 
           style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
        {number}
      </div>
      <h3 className="fw-bold text-dark">{title}</h3>
      <p className="text-secondary">{info}</p>
    </div>
  );
};

export default function How() {
  return (
    <section id="how" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">How It Works</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <Guide number="1" title="Download And Install" info="Get the app from device store / Download from website" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <Guide number="2" title="Confifure Preferences" info="custumize app setting according to preference" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <Guide number="3" title="Start Using" info="Being exploring the world with AI power " />
          </div>
        </div>
      </div>
    </section>
  );
}
