import React, { Component } from "react";
import Home from "../Home"
import 'whatwg-fetch'

import { getFromStorage } from './../../utils/storage';

class LogOut extends Component {
logout = () => {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
              console.log('Token Empty')
            this.setState({
              token: '',
              isLoading: false,
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const {
      isLoading,
      token
    } = this.state

    if(isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    if(!token) {
      return (
      <div>
          <h2>Logged Out</h2>
          <Home/>
      </div>
      )
    }
   
}
}

  export default LogOut;