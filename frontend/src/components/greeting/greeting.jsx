import React from "react";
import { Link } from 'react-router-dom';
import "../../stylesheets/components/navbar/mainnav.css";



class Greeting extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props
    // console.log(this.state)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.user.id)
  }

  render() {
    debugger;
    let links;

    if (!this.props.user) {
      links = (
        <div className="dropdown-content">
          <Link to={"/login"}>Sign In</Link>
          <Link to={"/signup"}>Sign Up</Link>
          <Link to={'/developers'}>Developers</Link>
        </div>
      )
    } else {
      links = (
        <div className="dropdown-content">
          <a href="/#/login" onClick={this.props.logout} >Sign Out</a>
          <Link to={'/users/' + this.props.user.id}>Profile</Link>
          <Link to={'/developers'}>Developers</Link>
        </div>
      )
    };
    return (
      <div className="nav-bar">
        <div className="nav-left">
          <Link to="/workoutnew">
            <img className="logo" src="ballon.png" alt="egg-logo" height="60px"/>
          </Link>
        </div>

        <h1><Link to="/workoutnew">GetYoked</Link></h1>
        <div className="nav-right">
          <div className="dropdown" >
            <button className="dropbtn"><img src="hamburger.png" height="48px" alt="dropdown hamburger" /></button>
            {links}
          </div>
        </div>
      </div>
    )
  };
}

export default Greeting;