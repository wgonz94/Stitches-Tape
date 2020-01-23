import React, { Component } from "react";
import Measurements from "../Tables/Measurement";
import "./display.css";

class Display extends Component {
  render() {
    return (
      <section>
        <div className='display'>
          <Measurements />
        </div>
      </section>
    );
  }
}

export default Display;
