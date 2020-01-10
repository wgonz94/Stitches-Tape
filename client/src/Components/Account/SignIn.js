import React, { Component } from 'react';

const initialState = {
  username: '',
  password: ''
};

class SignIn extends Component {
  state = initialState;

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(initialState);
    console.log(this.state);
    console.log('Submitted');
  };

  render() {
    return (
      <div className='container'>
        <form onClick={this.handleSubmit}>
          <ul className='login-form'>
            <h1 className='center'>Login</h1>
            <div>
              <li>
                <input
                  type='text'
                  id='username'
                  placeholder='Username'
                  value={this.state.username}
                  required
                  onChange={this.handleChange}
                />
              </li>
              <li>
                <input
                  type='password'
                  id='password'
                  placeholder='Password'
                  value={this.state.password}
                  required
                  onChange={this.handleChange}
                />
              </li>
              {/* <h4>I forgot my Password!</h4> */}
              <input type='submit' defaultValue='Login' />
            </div>
          </ul>
        </form>
      </div>
    );
  }
}

export default SignIn;
