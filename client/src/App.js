import React, { Component, useState, useMemo } from "react";
import { Switch, Route } from "react-router-dom";
// import 'materialize-css/dist/css/materialize.min.css';
import Navbar from "./Components/Navbar/Nav";
import Home from "./pages/Home";
import SignUp from "./pages/Account/SignUp";

import LogOut from "./pages/Account/LogOut";
import Contact from "./pages/Contact/Contact";
import MeasureWrapper from "./pages/MeasureWrapper";
import Measurements from "./Components/Measurements/Measurement";
import Footer from "./Components/Footer/Footer";
import ProtectedRoute from "./utils/protectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import ThemeContextProvider from "./Context/ThemeContext";
import AuthContextProvider from "./Context/AuthContext";
import { UserGenerate } from "./Context/UserContext";
import SignIn from "./pages/Account/SignIn";

function App (){
  //starts out null because no users are present (initally)
    const [user, setUser] = useState(null)
    const userInfo = useMemo(() => ({user,setUser}), [user, setUser])

    return (
      <div className='main-container'>
        <div className='App screen'>
          
          <header>
            <Navbar />
          </header>
          <main>
            <Switch>
              <UserGenerate.Provider value={{userInfo}}>
              <Route exact path='/' component={Home} />
              <Route
                path='/signup'
                render={() => <SignUp signUp={this.signUp} />}
              />
              
              <Route
                path='/signin'
                render={props => <SignIn signIn={() => setUser()} />}
              />
              <Route
                path='/logout'
                render={() => <LogOut logout={this.logout} />}
              />
              <Route exact path='/newmeasure' component={MeasureWrapper} />
              <Route path='/contact' component={Contact} />
              <Route path='/measurements' component={Measurements} />
              <Route path='/dashboard' component={Dashboard} />
               </UserGenerate.Provider>
            </Switch>
          </main> 
        
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }


export default App;
