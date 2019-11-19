import React from 'react';
import { Switch } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";

const App = () => (
  <div>
    <GreetingContainer />
    <Switch>
      <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />
    {/* routes for workouts */}
    {/* route for profile */}
    </Switch>
    {/* footer? */}
  </div>
);

export default App;