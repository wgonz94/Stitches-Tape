import React, { useContext } from "react";
import "./Title.css";
import { ThemeContext } from "../../Context/ThemeContext";
import jeans from "../../Images/jeans.jpg";
import suit from "../../Images/tailorsuit.jfif";

const Title = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div>
      <section
        className='section'
        style={{
          color: theme.text
        }}
      >
        <div className='row'>
          <div className='col s12'>
            <h2
              className=' center title'
              style={{
                backgroundColor: "#5558aa",
                padding: "2vh",
                color: theme.uitext
              }}
            >
              THE ONLY MEASUREMENT TRACKING TOOL YOU WILL EVER NEED!
            </h2>
          </div>
        </div>

        <div className='row container' id='about'>
          <p
            className='flow-text col s12 m8 right z-depth-3'
            style={{
              padding: "5vh",
              background: theme.bgc,
              border: "5px solid #5558aa"
            }}
          >
            The Stitches and Tape (S&T) measurement tracker is a simplified, yet
            dynamic, tracking tool. It allows you, the Clothier, to store and
            track all the measurements you might need to create anything from a
            simple shirt to a bespoke suit and everything else in-between for
            your clientele. Athleisure ware, business suits, cosplay, evening
            gowns, you'll have the needed measurements at the click of a button
            instead of wading through folders of measurement sheets.
          </p>
          <img
            src={jeans}
            className='col s12 m4 left responsive-img'
            alt=''
            style={{ paddingTop: "7vh" }}
          />
        </div>
        <div className='row container'>
          <img src={suit} className='col s12 l4 right responsive-img' style={{ paddingTop: "10vh" }} alt='' />

          <p
            className='flow-text col s12 m8 left z-depth-3'
            style={{
              padding: "5vh",
              background: theme.bgc,
              border: "5px solid #5558aa"
            }}
          >
            Whether you're a novice designer or an experienced Clothier, S&T is
            the perfect tool. Unlike most measurement tracking tools on the
            market, S&T, provides you with large scope measurement tracking. S&T
            offers you a selection of generic measurements, 50 measurements to
            track, and 5 custom measurements! You have the option to track these
            measurements in inches or centimeters (whichever best suits your
            needs). Also, you can capture any notes to relating to your client!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Title;
