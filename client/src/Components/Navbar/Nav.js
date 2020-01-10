import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  return (
    <header>
  <div className="navbar-fixed">
    {/* Nav bar */}
    <nav className="nav-wrapper">
      <div className="container">
        <Link to='/' className="brand-logo left hide-on-med-and-down flow-text">Stitches &amp; Tape</Link>
        <Link to='/' className="brand-logo center hide-on-med-and-up flow-text">Stitches &amp; Tape</Link>
        <Link to='/' className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons">menu</i>
        </Link>
        <ul className="right hide-on-med-and-down">
          <li><Link to='/'>Information Page</Link></li>
          <li><Link to='/newmeasure' className="logged-in">New Measurements</Link></li>
          <li><Link to='/signup' id="signup" className="logged-out">Sign Up</Link></li>
          <li><Link to='/signin' id="signin" className="logged-out">Sign In</Link></li>
          <li><Link to='/' id="logout" className="logged-in">Log Out</Link></li>
          <li><Link to='/'>Contact</Link></li>
        </ul>
        {/* Mobile Nav Bar */}
        <ul className="sidenav grey lighten-2" id="mobile-menu">
          {/* <li><a href="#" class="logged-in">Account</Link></li> */}
          <li><Link to='/measure' className="logged-in">View Measurements</Link></li>
          <li><Link to='/newmeasure' className="logged-in">New Measurements</Link></li>
          <li><Link to='/signup' className="logged-out">Sign Up</Link></li>
          <li><Link to='/signin' className="logged-out">Sign In</Link></li>
          <li><Link to='/' className="logged-in">Log Out</Link></li>
          <li><Link to='/'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  </div>
</header>

  )
}
export default Navbar