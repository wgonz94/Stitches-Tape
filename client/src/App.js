import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './Components/Navbar/Nav';
import Home from './pages/Home';
import SignUp from './pages/Account/SignUp';
import SignIn from './pages/Account/SignIn';
import LogOut from './pages/Account/LogOut';
import Contact from './pages/Contact/Contact';
import MeasureWrapper from './pages/MeasureWrapper';
import Measurements from './Components/Measurements/Measurement';
import Footer from './Components/Footer/Footer';
import ProtectedRoute from './utils/protectedRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import ThemeContextProvider from './Context/ThemeContext';
import AuthContextProvider from './Context/AuthContext';

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
	render() {
		return (
			<div className='main-container'>
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
								render={props => (
									<SignIn signIn={this.signIn} />
								)}
							/>
							<Route
								path='/logout'
								render={() => <LogOut logout={this.logout} />}
							/>
							<Route
								exact
								path='/newmeasure'
								component={MeasureWrapper}
							/>
							<Route path='/contact' component={Contact} />
							<Route
								path='/measurements'
								component={Measurements}
							/>
							<Route path='/dashboard' component={Dashboard} />
						</Switch>
					</main>
					<footer>
						<Footer />
					</footer>
				</div>
			</div>
		);
	}
}

export default App;
