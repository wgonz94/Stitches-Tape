import React, { createContext, Component } from "react";
// import Title from "../Images/Title.png";
// import DarkModeTitle from "../Images/DarkModeTitle.png";

const images = require.context("../Images", true);

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      text: "black",
      ui: "white",
      bgc: "white",
      title: images("./Title.png"),
      bgImage: images("./bodybg.png"),
      name: "Dark Mode"
    },
    dark: {
      text: "#667",
      ui: "black",
      bgc: "#000",
      title: images("./DarkModeTitle.png"),
      bgImage: images("./bodybg.png"),
      name: "Light Mode"
    }
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
