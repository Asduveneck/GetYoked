import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import ProfileContainer from "./user/profile_container";

const App = () => (
  <div>
    <GreetingContainer />
    <Switch>
      {/* routes for login and signup */}
      {/* routes for workouts */}
      <ProtectedRoute path='/users/:id' component={ProfileContainer} />
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      {/* routes for workouts */}
      
    </Switch>
    {/* footer? */}
  </div>
);

export default App;