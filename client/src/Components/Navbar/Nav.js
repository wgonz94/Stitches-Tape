import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';

const Navbar = ({ handleSubcribe, handleLogin }) => {
  useEffect(() => {
    let elements = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elements);
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.sidenav');
    //   var instances = M.Sidenav.init(elems, {});
    // });
  });

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
            >
              Stitches &amp; Tape
            </NavLink>
            <NavLink
              to='/'
              className='brand-logo center hide-on-med-and-up flow-text'
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
                <NavLink to='/' className='hoverable'>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/newmeasure' className='logged-in hoverable'>
                  New Measurements
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/signup'
                  id='signup'
                  className='logged-out hoverable'
                >
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/signin'
                  id='signin'
                  className='logged-out hoverable'
                >
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink to='/' id='logout' className='logged-in hoverable'>
                  Log Out
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' className='hoverable'>
                  Contact
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
