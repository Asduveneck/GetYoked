import React from "react";
import { withRouter } from 'react-router-dom';
// import GreetingContainer from "../greeting/greeting_container";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="">
        <div className="signup-form-container">
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <div className="form">
              <div className="stepTitle">Sign up</div>

              <div className="regFormTitle">Create your account.</div>
              <div className="signupErrors">{this.renderErrors()}</div>
            </div>

            <div className="signup-form">
              <div className="signup-input-user">
                {/* <label>Email */}
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="signup-input"
                  placeholder="Username"
                />
                {/* </label> */}
              </div>

              <div className="signup-input-password">
                {/* <label>Password */}
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="signup-input"
                  placeholder="Password"
                />
                {/* </label> */}
              </div>
              <div className="submitDiv">
                <input
                  className="signup-session-submit"
                  type="submit"
                  value={this.props.formType}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
