import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const About = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className='container' style={{ color: theme.uitext }} id='about'>
      <h1
        className='center z-depth-3'
        style={{ padding: "2vh", backgroundColor: "#5B3391" }}
      >
        You're In the Right Place!
      </h1>
      <div className='row center container'>
        <p
          className='flow-text center container col s12'
          style={{ padding: "5vh", background: theme.bgc, color: theme.text }}
        >
          There is a proper way to take measurements to give the best fit when
          making a garment. Your finished garment will only fit as well as the
          accuracy of the measurements it is based upon. Whether it's for
          personal use or to serve your clients, accurate measurements are
          essential for a proper fit.
        </p>
      </div>

      <div>
        <h3
          className='flow-text center'
          style={{
            background: theme.bgc,
            color: theme.text,
            padding: "5vh",
            fontSize: "5vh"
          }}
        >
          We provide you the perfect tool to do just that!
        </h3>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr></hr>
    </div>
  );
};

export default About;
