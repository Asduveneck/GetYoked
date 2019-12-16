import React from "react";

import { Link, withRouter } from "react-router-dom";
import "../../stylesheets/components/login_page.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.processForm(user)
      .then(() => this.props.history.push("/workoutnew"));
  }

  demoUser(e) {
    e.preventDefault();
    // Using setTimeout with setState to add each letter for demoing
    let demoUsrnm = "YokedUser"; // probably need a forLoop with a setState on each one.
    let demoPswrd = "password";
    let blnkDmUsrnm = ""
    let blnkDmPswrd = ""
    const delayPrms = (ms, val) => {
      new Promise(function(resolve) {
        setTimeout(resolve.bind(null, val), ms)
      });
    }
    // for (let char of demoUsrnm) {
    //   setTimeout( () => {
    //     blnkDmUsrnm += char;
    //   }, 300).then( () => {
    //     console.log(char);
    //     console.log(blnkDmUsrnm);
    //     this.setState({ username: blnkDmUsrnm });
    //   })
    // }
    // setTimeout( () => { // username
    //   // Defaults for demo: 
    //   let demoUsrnm = "YokedUser"; // probably need a forLoop with a setState on each one.
    //   let demoPswrd = "password";

    // }, 120); // probably do a .then after for password, then another one to 
    // const user = {
    //   username: "YokedUser",
    //   password: "password"
    // };
    // this.setState(user);
    // this.props.processForm(user).then(() => {
    //   this.props.history.push("/workoutnew");
    // });
  }

  renderErrors() {
    return (
      <ul>
        {Object.values(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className="background">
          
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="signInMessage">Sign In</div>
            <ul className="sessionError"></ul>

            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              className="login-input"
              placeholder="Username"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input"
              placeholder="Password"
            />
            <input className="session-submit" type="submit" value="Sign In" />
            <input
              className="session-submit"
              type="submit"
              value="Sign In as Guest"
              onClick={this.demoUser}
            />
            <div className="loginErrors">{this.renderErrors()}</div>
            <Link className="signupLink" to={"/signup"}>
              SIGNUP
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
