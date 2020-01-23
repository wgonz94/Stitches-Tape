import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import 'materialize-css/dist/css/materialize.min.css';
import Navbar from "./Components/Navbar/Nav";
import Home from "./pages/Home";
// import Measurements from './Components/Tables/Measurement';
import SignUp from "./pages/Account/SignUp";
import SignIn from "./pages/Account/SignIn";
import LogOut from "./pages/Account/LogOut";
import Contact from "./Components/Contact/Contact";
import MeasureWrapper from "./pages/MeasureWrapper";
import Footer from "./Components/Footer/Footer";
import ProtectedRoute from "./utils/protectedRoute";

// const initUser = {
//   name: '',
//   nameInvalid: '',
//   username: '',
//   usernameInvalid: '',
//   email: '',
//   emailInvalid: '',
//   password: '',
//   passwordInvalid: '',
//   passCheck: '',
//   passCheckInvalid: '',
//   moreInfo: false
// };

class App extends Component {
  // state = {
  //   currUser: initUser,
  //   subscribed: false,
  //   login: false
  // };
  // signUp = newUser => {
  //   this.setState({ currUser: newUser });
  // };

  // signIn = user => {
  //   this.setState({ currUser: user });
  // };

  // handleSubcribe = () => {
  //   this.state.subscribed ?  : { divStyleAgain };
  // };

  // handleLoggedIn = () => {
  //   this.state.login ? console.log('Logged In!') : console.log('Logged Out!');
  // };

  render() {
    return (
      <BrowserRouter>
        <div className='App screen'>
          <header>
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route
                path='/signup'
                render={() => <SignUp signUp={this.signUp} />}
              />
              <Route
                path='/signin'
                render={props => <SignIn signIn={this.signIn} />}
              />
              <Route
                path='/logout'
                render={() => <LogOut logout={this.logout} />}
              />
              <ProtectedRoute
                exact
                path='/newmeasure'
                component={MeasureWrapper}
              />
              {/* <Route path='/measurements' component={Measurements} /> */}
              <Route path='/contact' component={Contact} />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
