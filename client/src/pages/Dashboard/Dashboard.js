import React, { Component } from "react";
import "./Dashboard.css";
import { ThemeContext } from "../../Context/ThemeContext";
import { AuthContext } from "../../Context/AuthContext";
import { NavLink } from "react-router-dom";
import UserImage from "../../Images/designergirl.png";

class Dashboard extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {themeContext => {
              const { isAuthorized, toggleAuth } = authContext;
              const { isLightTheme, light, dark, toggleTheme } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <div
                  className='dashboard'
                  style={{
                    backgroundColor: theme.bgc,
                    color: theme.ui
                  }}
                >
                  <div
                    className='ui'
                    style={{
                      backgroundColor: theme.bgc,
                      color: theme.ui
                    }}
                  >
                    <div className='row'>
                      <div className='col s12'>
                        <h1 className='center'>Welcome</h1>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col s12 m4'>
                        <div
                          className='card small'
                          style={{ backgroundColor: "#5558aa" }}
                        >
                          <div className='card-content white-text'>
                            <span className='card-title'>
                              VIEW MEASUREMENTS
                            </span>
                            <p>
                              View your most recently viewed, or added,
                              measurements quickly and easily here. This will
                              display full measurement sets or if you have
                              created and used a Template most recently those
                              measurements will be displayed here. For older
                              measurement sets, see your Client List or Projects
                            </p>
                          </div>
                          <div className='card-action center'>
                            <NavLink
                              to='/measurements'
                              className='hoverable center'
                              style={{ color: theme.uitext }}
                            >
                              MEASUREMENTS
                            </NavLink>
                          </div>
                        </div>
                      </div>{" "}
                      <div className='col s12 m4'>
                        <div
                          className='card small'
                          style={{ backgroundColor: "#5558aa" }}
                        >
                          <div className='card-content white-text'>
                            <span className='card-title center'>
                              NEW MEASUREMENTS
                            </span>
                            <p>
                              Get your tape measure and get ready! It's time to
                              start the path of custom Clothiers! Don't forget
                              to stretch, its gonna be alot of up and down!
                            </p>
                          </div>
                          <div className='card-action center'>
                            <NavLink
                              to='/newmeasure'
                              className='hoverable'
                              style={{ color: theme.uitext }}
                            >
                              NEW MEASUREMENTS
                            </NavLink>
                          </div>
                        </div>
                      </div>{" "}
                      <div className='col s12 m4'>
                        <div
                          className='card small'
                          style={{ backgroundColor: "#5558aa" }}
                        >
                          <div className='card-content white-text'>
                            <span className='card-title'>TEMPLATES</span>
                            <p>
                              Do you specialize in a few types of items and only
                              need a few of the measurements from the tracker?
                              Create a template with a custom set of
                              measurements and save yourself time and hassle.
                              Just come back here when you need your Template
                              again!
                            </p>
                          </div>
                          <div className='card-action center'>
                            <NavLink
                              to='/display/errorpage'
                              className='hoverable'
                              style={{ color: theme.uitext }}
                            >
                              TEMPLATES
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col s12 m4'>
                        <div
                          className='card small'
                          style={{ backgroundColor: "#5558aa" }}
                        >
                          <div className='card-content white-text'>
                            <span className='card-title'>CLIENT LIST</span>
                            <p>
                              Here's your list of Clients, may it be long and
                              profitable. You can sort your Clients by name,
                              Project, or even the type of item you made for
                              them! Access your Client List quickly and easily
                              by clicking below.
                            </p>
                          </div>
                          <div className='card-action center'>
                            {" "}
                            <p
                              className='center hoverable'
                              style={{ color: theme.uitext }}
                            >
                              CLIENT LIST
                            </p>
                          </div>
                        </div>
                      </div>{" "}
                      <div className='col s12 m4'>
                        <div
                          className='card small'
                          style={{ backgroundColor: "#5558aa" }}
                        >
                          <div className='card-content white-text'>
                            <span className='card-title'>PROJECTS</span>

                            <p>
                              We've stored all your projects here for you to
                              view. These will be listed by newest first but can
                              be sorted by date created, Client Name, or even by
                              due date. You can even turn on Notifications to
                              allow us to remind you at a set interval when your
                              item is coming due for final delivery.
                            </p>
                          </div>
                          <a className='btn-floating halfway-fab waves-effect waves-light green'>
                            <i className='material-icons'>add</i>
                          </a>
                          <div className='card-action center'>
                            <p
                              className='center hoverable'
                              style={{ color: theme.uitext }}
                            >
                              PROJECTS
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col s12 m4'>
                        <div
                          className='card small'
                          style={{ backgroundColor: "#5558aa" }}
                        >
                          <div className='card-content white-text'>
                            <span className='card-title'>MESSAGE CENTER</span>
                            <p>
                              Need to ask a question or have a style idea for
                              your client? Contact them through the Message
                              Center to avoid handing out your personal phone
                              number or other contact information. Handle all
                              your communication here and keep your projects
                              organized and all together.
                            </p>
                          </div>
                          <div className='card-action'>
                            <p
                              className='center hoverable'
                              style={{ color: theme.uitext }}
                            >
                              MESSAGE CENTER
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Dashboard;
