import React, { Component } from "react";
import SideNav from "../../Components/Dashboard/Sidenav";
import Display from "../../Components/Dashboard/Display";
import Projects from "../../Components/Dashboard/Projects";
import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    username: ""
  };

  render() {
    return (
      <div className='row'>
        <div className='col s2'>
          <SideNav />
        </div>
        <div className='col s10'>
          <Display />

          <div className='row'>
            <div className='col s12'>
              <Projects />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
