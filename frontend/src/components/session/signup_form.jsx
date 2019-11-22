import React from "react";
import { withRouter } from 'react-router-dom';
// import GreetingContainer from "../greeting/greeting_container";
import '../../stylesheets/components/signup_page.css'

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
    console.log(e.currentTarget);
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
      <div className="">
        <p></p>
        <div className="signup-form-container">
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <div className="form">
              <div className="stepTitle">Sign up</div>

              <div className="regFormTitle">Create your account.</div>
              <div className="signupErrors">{this.renderErrors()}</div>
            </div>

            <div className="signup-form">
              <div className="signup-input-user">
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="signup-input"
                  placeholder="Username"
                />
              </div>
              <div className="signup-input-password">
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="signup-input"
                  placeholder="Password"
                />
              </div>

              <div className="signup-input-password">
                <input
                  type="text"
                  value={this.state.age}
                  onChange={this.update("age")}
                  className="signup-input"
                  placeholder="Age"
                />
              </div>
              <div className="signup-input-password">
                <input
                  type="text"
                  value={this.state.height}
                  onChange={this.update("height")}
                  className="signup-input"
                  placeholder="Height"
                />
              </div>
              <div className="signup-input-password">
                <input
                  type="text"
                  value={this.state.weight}
                  onChange={this.update("weight")}
                  className="signup-input"
                  placeholder="Weight"
                />
              </div>
              <div className="signup-input-password">
                <div className="custom-select">
                  <select onChange={this.update("activity")}>
                    <option>Select Activity Level:</option>
                    <option value="light">House Cat</option>
                    <option value="medium">Average Human Level</option>
                    <option value="hard">Spartan</option>
                  </select>
                </div>
              </div>
              <div className="signup-input-password">
                <div className="custom-select">
                  <select onChange={this.update("goals")}>
                    <option>Select Goal:</option>
                    <option value="5k">5k</option>
                    <option value="lose weight">Lose Weight</option>
                    <option value="Michelle Obama arms">
                      Michelle Obama Arms
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="gif">
              <iframe
                src="https://giphy.com/embed/l2JhB4Sp6hz37lU1W"
                width="360"
                height="480"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
              <p>
              </p>
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
