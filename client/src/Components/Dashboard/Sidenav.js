import React from "react";
import UserImage from "../../Images/designergirl.png";

const SideNav = () => {
  return (
    <div>
      <ul id='nav-mobile' className='sidenav sidenav-fixed center'>
        <img src={UserImage} alt='' />
        <p className='flow-text'>Edit Profile</p>
        <div className='divider'></div>

        <li></li>
        <li>Heres something else</li>
      </ul>
    </div>
  );
};

export default SideNav;
