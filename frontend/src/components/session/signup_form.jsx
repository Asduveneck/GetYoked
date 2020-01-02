import React from "react";
import { withRouter } from 'react-router-dom';
// import GreetingContainer from "../greeting/greeting_container";
// import "../../stylesheets/components/auth/login_page.css";
import "../../stylesheets/components/auth/signup_page.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      age: "",
      height: "",
      weight: "",
      activity: "",
      goals: "",
      achievement: ""

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    }
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm(user)
    setTimeout(()=> this.props.processLoginForm(user).then(() => this.props.history.push("/workoutnew")),2000);
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
      <div className="sesh_screen">
        <div className="left_2thirds" >{/* Placeholder for colors */}</div>
        <div className="right_1third">
        <div className="background">
          <form onSubmit={this.handleSubmit} className="session-form">
            <div className="session-Message">Sign up</div>
            <div className="form">
              {/* <div className="regFormTitle">Create your account.</div> */}
              <div className="signupErrors">{this.renderErrors()}</div>
            </div>

            {/* <div className="signup-form"> */}
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

            <input
              type="text"
              value={this.state.age}
              onChange={this.update("age")}
              className="sesh-input"
              placeholder="Age"
            />
            <input
              type="text"
              value={this.state.height}
              onChange={this.update("height")}
              className="sesh-input"
              placeholder="Height"
            />
            <input
              type="text"
              value={this.state.weight}
              onChange={this.update("weight")}
              className="sesh-input"
              placeholder="Weight"
            />
            <div className="custom-select">
              <select onChange={this.update("activity")}>
                <option>Select Activity Level:</option>
                <option value="light">House Cat</option>
                <option value="medium">Average Human Level</option>
                <option value="hard">Spartan</option>
              </select>
            </div>
            <div className="custom-select">
              <select onChange={this.update("goals")}>
                <option>Select Goal:</option>
                <option value="5k">5k</option>
                <option value="lose weight">Lose Weight</option>
                <option value="Michelle Obama arms">Michelle Obama Arms</option>
              </select>
            </div>
            {/* </div> */}
            <div className="submitDiv">
              <input
                className="session-submit signupButton"
                type="submit"
                value={this.props.formType}
              />
            </div>
            {/* <div className="gif">
              <iframe
                src="https://giphy.com/embed/l2JhB4Sp6hz37lU1W"
                width="360"
                height="480"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
            </div> */}
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
