import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
// import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './Components/Navbar/Nav';
import Home from './Components/Home/Home'
import NewMeasurement from './Components/Tables/NewMeasurement';
// import Measurements from './Components/Tables/Measurements'
import SignUp from './Components/Account/SignUp'
import SignIn from './Components/Account/SignIn'

function App() {

  return (
    <BrowserRouter>
    <div className="App screen">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/newmeasure' component={NewMeasurement} />
      {/* <Route exact path='/measurements' component={Measurements} /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
