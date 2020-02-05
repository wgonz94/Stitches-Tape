import React, { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "../../Context/ThemeContext";

const Header = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <section>
      <div className='center'>
        <header className='image'>
          <img className='img responsive-img' src={theme.title} alt='Title' />
        </header>
      </div>
    </section>
  );
};

export default Header;
