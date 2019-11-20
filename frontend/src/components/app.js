import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileContainer from "./user/profile_container";

const App = () => (
  <div>
    {/* navbar etc goes here */}
    <Switch>
    {/* routes for login and signup */}
    {/* routes for workouts */}
      <Route path='/users/:id' component={ProfileContainer} />
    </Switch>
    {/* footer? */}
  </div>
);

export default App;