import React from "react";
import { Link } from 'react-router-dom';
import "../../stylesheets/components/navbar/mainnav.css";



class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props
    console.log(this.state)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id)
  }

  render() {
    if (this.props.location.pathname === '/signup') {
      return (
      <div>
          <Link className="" to={"/login"}>Sign In</Link>
      </div>
      )  
    } if (this.props.location.pathname === '/login')  { 
      return null;
    } else {
      return (
        <div>
          <div className="navRight">
            <div className="dropdown" >
              <button className="dropbtn"><img src="ballon.png" height="60px" alt="" /></button>
              <div className="dropdown-content">
                {/* <Link to={`/users/${this.props.match.params.id}`} onClick={this.state.fetchUser}>Manage Profiles</Link> */}
                
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