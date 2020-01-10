import React, { Component } from 'react';

const initialState = {
  username: '',
  usernameInvalid: '',
  email: '',
  emailInvalid: '',
  password: '',
  passwordInvalid: '',
  passCheck: '',
  passCheckInvalid: '',
  moreInfo: false
};

class SignUp extends Component {
  state = initialState;

  handleChange = e => {
    this.setState({
      [e.target.id]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
    console.log(this.state);
    // eslint-disable-next-line no-unused-expressions
    this.state.username.length < 6
      ? this.setState({
          usernameInvalid: 'Username must be at least 6 characters'
        })
      : this.setState({ usernameInvalid: null });
    this.state.email.length < 6
      ? this.setState({ emailInvalid: 'Email must be at least 6 characters' })
      : this.setState({ emailInvalid: null });
    this.state.password.length < 10
      ? this.setState({
          passwordInvalid: 'Email must be at least 10 characters'
        })
      : this.setState({ passwordInvalid: null });
    this.state.password === this.state.passCheck
      ? this.setState({ passCheckInvalid: null })
      : this.setState({
          passCheckInvalid: 'Passwords do not match, please try again'
        });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState(initialState);
  };

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <ul className='register-form'>
            <h2>New Account:</h2>
            <li>
              <input
                type='text'
                id='username'
                name='username'
                placeholder='Username'
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
              <div className='clear red-text strong'>
                {this.state.usernameInvalid}
              </div>
            </li>
            <li>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='example@email.com'
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <div className='clear red-text'>{this.state.emailInvalid}</div>
            </li>
            <li>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <div className='clear red-text'>{this.state.passwordInvalid}</div>
            </li>
            <li>
              <input
                type='password'
                name='passCheck'
                id='passCheck'
                placeholder='Password (Again)'
                value={this.state.passCheck}
                onChange={this.handleChange}
                required
              />
              <div className='clear red-text'>
                {this.state.passCheckInvalid}
              </div>
            </li>
            <p>
              <label>
                <input
                  type='checkbox'
                  id='moreInfo'
                  value={this.state.moreInfo}
                  checked={this.state.moreInfo}
                  onChange={e => this.handleChange(e, true)}
                />
                <span>
                  Please inform me of upcoming Changes, Promotions, and News
                </span>
              </label>
            </p>
            <br />
            <input type='submit' defaultValue='Create Account' />
            <div className='clear'> </div>
          </ul>
        </form>
      </div>
    );
  }
}

export default SignUp;
