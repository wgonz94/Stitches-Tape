import React from "react";

const Title = () => {
  return (
    <section className="container section">
      <div className="row">
        <div className="col s12">
          <h1 className="center title">Simplified Measurement Tracking</h1>
        </div>
      </div>
      <div className="row" id="about">
        <p className="flow-text">
          The Stitches and Tape measurement tracker allows you, the Tailor, to
          store and track all the measurements you might need to create custom items for your clientele.
          Shirt, pants, or perhaps a medieval costume, you'll have the needed measurements at the click of a button instead of wading through
          folders of measurement sheets.  
        </p>
        <p className="flow-text">
          Create customized Templates for items you make often to further reduce the scope of your measurements and only view the ones you need 
          for your current project.
        </p>
      </div>
    </section>
  );
};

export default Title
