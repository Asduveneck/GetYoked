import React from "react";
import { Link } from 'react-router-dom';
import "../../stylesheets/components/navbar/mainnav.css";



class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.location.pathname === '/signup') {
      return (
      <div>
          <Link className="" to={"/login"}>Sign In</Link>
      </div>
      )  
    }; 
    if (this.props.location.pathname === '/workoutnew') {
      return (
        <div>
          <div className="navRight">
            <div className="dropdown" >
              <button className="dropbtn"><img src="ballon.png" height="60px" alt="" /></button>
              <div className="dropdown-content">
                <a href="#">Manage Profiles</a>
                <a href="/#/login" onClick={this.props.logout} >Sign Out</a>
              </div>
            </div>
          </div>
  
       
        </div>
      )
    };
  return (null)
  };
}

export default Greeting;