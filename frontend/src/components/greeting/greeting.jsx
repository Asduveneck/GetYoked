import React from "react";
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.location.pathname === '/signup') {
      return (
      <div>
          <Link className="" to="/login">Sign In</Link>
      </div>
    )
  }

    else if (this.props.location.pathname === '/login') {
      return (
       null

      )
};
  }
};

export default Greeting;