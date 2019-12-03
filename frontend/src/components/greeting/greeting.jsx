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
    if (!this.props.user) {
      return (
        <div>
          <div className="navRight">
            <div className="dropdown" >
              <button className="dropbtn"><img src="ballon.png" height="60px" alt="" /></button>
              <div className="dropdown-content">
                
                <Link to={"/login"}>Sign In</Link>
                <Link to={"/signup"}>Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="navRight">
            <div className="dropdown" >
              <button className="dropbtn"><img src="ballon.png" height="60px" alt="" /></button>
              <div className="dropdown-content">
                <a href="/#/login" onClick={this.props.logout} >Sign Out</a>
                <Link to={'/users/' + this.props.user.id}>Profile</Link>
              </div>
            </div>
          </div>
  
       
        </div>
      )
    };
  };
}

export default Greeting;