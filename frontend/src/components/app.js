import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import WorkoutFormContainer from './workouts/workout_form/workout_form_container';

import './reset.scss'

const App = () => (
  <div>
    <GreetingContainer />
    <Switch>
      <ProtectedRoute exact path="/workoutnew" component={WorkoutFormContainer} />
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      {/* routes for workouts */}
      {/* route for profile */}
    </Switch>
    {/* footer? */}
  </div>
);

export default App;