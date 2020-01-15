import React, { Component } from "react";
import 'whatwg-fetch'

import { getFromStorage, setInStorage } from './../../utils/storage';

    export default class SignIn extends Component {
      constructor(props) {
        super(props);

        this.state = {
          isLoading: true,
          isLoggedIn: '',
          signInError: '',
          signInEmail: "",
          signInPassword: "",
        };

        this.onChangeSignInUsername = this.onChangeSignInUsername.bind(this)
        this.onChangeSignInPassword = this.onChangeSigninPassword.bind(this)

        this.onSignIn = this.onSignIn.bind(this);
      }

      componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token){
          const { token } = obj
          //verify token
          fetch('/api/account/verify?token' + token)
          .then(res => res.json())
          .then(json => {
            if(json.success) {
              this.setState({
              token,
              isLoading: false
            });
            } else {
              this.setState({
                isLoading: false,
              });
            }
          })
        } else {
          this.setState({
            isLoading: false,
          })
        }
      }

      onChangeSignInUsername(event) {
        this.setState({
          signInUsername: event.target.value,
        })
      }
      onChangeSignInPassword(event) {
        this.setState({
          signInPassword: event.target.value,
        })
      }
     
      onLogin() {
        //Grab State
        const {
          signInUsername,
          signInPassword,
        }= this.state;

        this.setState({
          isLoading: true,
        })
        //Post request to backend
        fetch('/api/account/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            username: signInUsername,
            password: signInPassword,
          }),
        }).then(res => res.json())
          .then(json => {
            if(json.success){
              setInStorage('the_main_app', { token: json.token });
              this.setState({
                signInError: json.message,
                isLoading: false,
                signInUsername: '',
                signInPassword: '',
                token: json.token,
              });
            }else {
              this.setState({
                signInError: json.message,
                isLoading: false,
              });
            }
          });
      }
     
      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = event => {
        event.preventDefault();
      }
      
      
      render() {
        const {
          isLoading,
          token,
          signInError,
          signInUsername,
          signInPassword,
        } = this.state;

        if(isLoading) {
          return (<div><p>Loading...</p></div>);
        }

        if(!token) {
          return (
          <div>
            <div>

              {
                (signInError) ? (
                  <p>{signInError}</p>
                ) : (null)
              }
                <p>Log In</p>
                <input type="email" placeholder="Email" value={signInUsername} onChange={this.onChangeSignInUsername}/>
                <input type="password" placeholder="Password" value={signInPassword} onChange={this.onChangeSignInPassword}/>
                <button onClick={this.onLogin}>Log In</button>
            </div>
           

          </div>)
        }
      }
    }
