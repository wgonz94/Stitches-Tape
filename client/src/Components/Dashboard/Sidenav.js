import React from "react";
import UserImage from "../../Images/designergirl.png";
import { NavLink } from "react-router-dom";
import "./sidenav.css";

const SideNav = () => {
  return (
    <div>
      <ul id='nav-mobile' className='sidenav sidenav-fixed center'>
        <img src={UserImage} alt='' />
        <p className='flow-text'>Edit Profile</p>
        <div className='divider'></div>

        <li>
          <NavLink to='/measurements' className=' logged-in hoverable'>
            Measurements
          </NavLink>
        </li>
        <li>
          <NavLink to='/newmeasure' className='logged-in hoverable'>
            New Measurements
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
