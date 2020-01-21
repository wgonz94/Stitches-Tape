import React from 'react';

const Title = () => {
  return (
    <section className='container section'>
      <div className='row'>
        <div className='col s12'>
          <h2 className='center title'>
            The only measurement tracking tool you’ll ever need!
          </h2>
        </div>
      </div>
      <div className='row' id='about'>
        <p className='flow-text'>
          The Stitches and Tape (S&T) measurement tracker is a simplified, yet
          dynamic, tracking tool. It allows you, the Clothier, to store and
          track all the measurements you might need to create anything from a
          simple shirt to a bespoke suit and everything else in-between for your
          clientele. Athleisure ware, business suits, cosplay, evening gowns,
          you'll have the needed measurements at the click of a button instead
          of wading through folders of measurement sheets. Create customized
          templates for items you make often to further reduce the scope of your
          measurements and only view the ones you need for your current project.
        </p>
        <p className='flow-text'>
          Whether you're a novice designer or an experienced Clothier, S&T is
          the perfect tool. Unlike most measurement tracking tools on the
          market, S&T, provides you with a large scope measurement tracking. S&T
          offers you 48 measurements to track plus 5 customizable measurements!
          You have the option to track these measurements in inches or
          centimeters (whichever best suits your needs). Also, you can capture
          any notes to relating to your client!
        </p>
      </div>
    </section>
  );
};

export default Title;
