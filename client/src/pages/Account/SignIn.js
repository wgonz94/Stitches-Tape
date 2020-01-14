import React, { Component } from 'react';

const initState = {
  username: '',
  password: ''
};

class SignIn extends Component {
  state = initState;

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
    console.log(this.state);
    console.log('Submitted');
  };

  render() {
    return (
      <div className='container'>
        <h2 className='center'>Login</h2>
        <form onClick={this.handleSubmit} className='border'>
          <ul className='login-form center'>
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
              <br />
              {/* <h4>I forgot my Password!</h4> */}
              <input className='btn' type='submit' defaultValue='Login' />
            </div>
          </ul>
        </form>
      </div>
    );
  }
}

export default SignIn;
