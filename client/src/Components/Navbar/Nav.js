import React from 'react';

import './Nav.css';

const Navbar = () => {
  return (
    <header>
  <div className="navbar-fixed">
    {/* Nav bar */}
    <nav className="nav-wrapper">
      <div className="container">
        <a  className="brand-logo left hide-on-med-and-down flow-text">Stitches &amp; Tape</a>
        <a  className="brand-logo center hide-on-med-and-up flow-text">Stitches &amp; Tape</a>
        <a  className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li><a >Information Page</a></li>
          <li><a data-target="clientinfo" className="modal-trigger logged-in">New Measurements</a></li>
          <li><a  id="signup" className="logged-out">Sign Up</a></li>
          <li><a  id="signin" className="logged-out">Sign In</a></li>
          <li><a  id="logout" className="logged-in">Log Out</a></li>
          <li><a >Contact</a></li>
        </ul>
        {/* Mobile Nav Bar */}
        <ul className="sidenav grey lighten-2" id="mobile-menu">
          {/* <li><a href="#" class="logged-in">Account</a></li> */}
          <li><a  className="logged-in">New Measurements</a></li>
          <li><a  className="logged-in">View Measurements</a></li>
          <li><a  className="logged-out">Sign Up</a></li>
          <li><a  className="logged-out">Sign In</a></li>
          <li><a  className="logged-in">Log Out</a></li>
          <li><a >Contact</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>

  )
}
export default Navbar