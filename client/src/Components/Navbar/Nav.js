import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import { ThemeContext } from "../../Context/ThemeContext";

const Navbar = ({ handleSubcribe, handleLogin }) => {
  useEffect(() => {
    let elements = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elements);

    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.sidenav');
    //   var instances = M.Sidenav.init(elems, {});
    // });
  });
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  // const [style, setStyle] = useState({ display: 'none' });

  // window.addEventListener('scroll', e => {
  //   console.log(window.scrollY);
  //   console.log(style);
  // });

  // setStyle(window.scrollY >= 310 ? { display: 'fixed' } : { display: 'none' });
  // // console.log(handleSubcribe(), handleLogin());

  return (
    <header>
      <div className='navbar-fixed'>
        {/* Nav bar */}
        <nav className='nav-wrapper'>
          <div className='container'>
            <NavLink
              to='/'
              className='brand-logo left hide-on-med-and-down flow-text'
              style={{ color: theme.ui }}
            >
              Stitches &amp; Tape
            </NavLink>
            <NavLink
              to='/'
              className='brand-logo center hide-on-med-and-up flow-text'
              style={{ color: theme.ui }}
            >
              Stitches &amp; Tape
            </NavLink>
            <NavLink
              to='#'
              className='sidenav-trigger'
              data-target='mobile-menu'
            >
              <i className='material-icons'>menu</i>
            </NavLink>
            <ul className='right hide-on-med-and-down'>
              <li>
                <NavLink
                  to='/'
                  className='hoverable'
                  style={{ color: theme.ui }}
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/signup'
                  id='signup'
                  className='logged-out hoverable'
                  style={{ color: theme.ui }}
                >
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/signin'
                  id='signin'
                  className='logged-out hoverable'
                  style={{ color: theme.ui }}
                >
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/'
                  id='logout'
                  className='logged-in hoverable'
                  style={{ color: theme.ui }}
                >
                  Log Out
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact'
                  className='hoverable'
                  style={{ color: theme.ui }}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/'
                  onClick={toggleTheme}
                  className='hoverable'
                  style={{ color: theme.ui }}
                >
                  {theme.name}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* Mobile Nav Bar */}
      <ul className='sidenav grey lighten-2' id='mobile-menu'>
        {/* <li><a href="#" class="logged-in">Account</NavLink></li> */}
        <li>
          <NavLink to='/measure' className='logged-in'>
            View Measurements
          </NavLink>
        </li>
        <li>
          <NavLink to='/newmeasure' className='logged-in'>
            New Measurements
          </NavLink>
        </li>
        <li>
          <NavLink to='/signup' className='logged-out'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/signin' className='logged-out'>
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to='/logout' className='logged-in'>
            Log Out
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
