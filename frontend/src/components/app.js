import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import WorkoutFormContainer from './workouts/workout_form/workout_form_container';
import TeamMembers from './teampage/team_page'
import Splash from './splash/splash_page'

import './reset.scss'
import ProfileContainer from "./user/profile_container";

const App = () => (
  <div>
    <GreetingContainer />
    <Switch>
      <ProtectedRoute exact path="/workoutnew" component={WorkoutFormContainer} />
      {/* routes for login and signup */}
      {/* routes for workouts */}
      <ProtectedRoute path='/users/:id' component={ProfileContainer} />
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      {/* routes for workouts */}
      <Route exact path = "/developers" component={TeamMembers} />
      <Route exact path = "/splash" component={Splash} />

    </Switch>
    {/* footer? */}
  </div>
);

export default App;