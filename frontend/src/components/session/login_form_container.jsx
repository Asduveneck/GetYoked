import React from "react";
// import GreetingContainer from "../greeting/greeting_container";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
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
    this.props.processForm(user).then(() => {
      this.props.history.push("/browse");
    });
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
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return null (
      
    //   <div className="background">
    //     <GreetingContainer />
    //     {/* <div className="login-form-container"> */}
    //     <form onSubmit={this.handleSubmit} className="login-form-box">
    //       <div className="signInMessage">Sign In</div>
    //       <ul className="sessionError"></ul>
    //       {/* <div className="login-form">            */}

    //       <input
    //         type="text"
    //         value={this.state.username}
    //         onChange={this.update("username")}
    //         className="login-input"
    //         placeholder="Email"
    //       />
    //       <input
    //         type="password"
    //         value={this.state.password}
    //         onChange={this.update("password")}
    //         className="login-input"
    //         placeholder="Password"
    //       />
    //       <input className="session-submit" type="submit" value="Sign In" />
    //       <input
    //         className="session-submit"
    //         type="submit"
    //         value="Sign In as Guest"
    //         onClick={this.login}
    //       />
    //       <div className="loginErrors">{this.renderErrors()}</div>
    //       <Link className="signupLink" to="/signup">
    //         New to Netflix? Sign up now.{" "}
    //       </Link>
    //       {/* </div> */}
    //     </form>
    //     {/* </div> */}
    //   </div>
    );
  }
}

export default LoginForm;
