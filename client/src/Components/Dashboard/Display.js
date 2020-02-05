import React from "react";
import { Switch, Route } from "react-router-dom";
import MeasureWrapper from "../../pages/MeasureWrapper";
import Measurements from "../Measurements/Measurement";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ErrorPage from "../Error/ErrorPage";

const Display = () => {
  return (
    <div className='row'>
      <div className='col s3'></div>
      <div className='col s12 m9'>
        <Switch>
          <Route exact path='/display/newmeasure' component={MeasureWrapper} />

          <Route path='/display/measurements' component={Measurements} />
          <Route path='/display/dashboard' component={Dashboard} />
          <Route path='/display/errorpage' component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
};
export default Display;
