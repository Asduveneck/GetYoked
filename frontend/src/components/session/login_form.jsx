import React from "react";

import { Link, withRouter } from "react-router-dom";
import "../../stylesheets/components/auth/login_page.css";
import {SVG} from "./sesh_svg";

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
    const delayPrms = (ms, val) => ( // Trying a delay with a promise for future mod: promise chaining.
      new Promise(function(resolve) {
        setTimeout(resolve.bind(null, val), ms)
      })
    );
    /* TODO: Refactor these for loops into a helper function. Tricky part is
      the `this.setState({}). eval it?
    */ 
    for (let i = 0; i < demoUsrnm.length; i++) {
      delayPrms(120*i).then( () => {
        let char = demoUsrnm[i]
        blnkDmUsrnm += char;
        this.setState({ username: blnkDmUsrnm });
      })
    }
    // Hack to delay based on demo username length. 
    // Ideally we use a helper for loop that returns a promise, then 
    // we can invoke the loop per string, then chain on promises...
    setTimeout( () => {
      for (let i = 0; i < demoPswrd.length; i++) {
        delayPrms(120 * i).then(() => {
          let char = demoPswrd[i]
          blnkDmPswrd += char;
          this.setState({ password: blnkDmPswrd });
        })
      }
    }, (demoUsrnm.length + 3)*120) // delay it even more

    // Another hack timer length
    setTimeout( () => {
      this.props.processForm(this.state).then( () => {
        this.props.history.push("/workoutnew");
      })
    }, (demoUsrnm.length + demoPswrd.length + 3) * 120 )

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
      <div className="sesh_screen">
          {/* <div className="left_2thirds" style={{ backgroundImage: 'url("/static/media/badlands.fa7e2f06.svg")'} } > */}
            {/* Why didn't the literal link work? */}
          {/* </div> */}
          <div className="login-left">
            <img src="/login_background_4.png" />
          </div>
          <div className="login-right">
           <div className="background">
          <form onSubmit={this.handleSubmit} className="session-form">
            <div className="session-Message">Sign In</div>
            <ul className="sessionError"></ul>

            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              className="sesh-input"
              placeholder="Username"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="sesh-input"
              placeholder="Password"
            />
            <input className="session-submit session-button" type="submit" value="Log In" />
            <input
              className="session-submit session-button"
              type="submit"
              value="Guest Log In"
              onClick={this.demoUser}
          />
            <div className="loginErrors">{this.renderErrors()}</div>
              <Link className="signupLink" to={"/signup"}>
                SIGNUP
              </Link>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
