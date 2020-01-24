import React, { Component } from "react";
import SideNav from "../../Components/Dashboard/Sidenav";
import Display from "../../Components/Dashboard/Display";
import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    username: ""
  };

  render() {
    return (
      <div className='dashboard'>
        <Display />
      </div>
    );
  }
}

export default Dashboard;
