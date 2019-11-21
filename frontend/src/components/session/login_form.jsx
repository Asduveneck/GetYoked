import React from "react";
// import GreetingContainer from "../greeting/greeting_container";
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
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/browse");
    }
    
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  // login(e) {
  //   e.preventDefault();
  //   const user = {
  //     username: "zaidclone",
  //     password: "password"
  //   };
  //   this.setState(user);
  //   setInterval(() => {});
  //   this.props.processForm(user).then(() => {
  //     this.props.history.push("/browse");
  //   });
  // }

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
        <div>
          
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
              onClick={this.login}
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
