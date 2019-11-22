import React from 'react';
import { Link } from 'react-router-dom';
import './workout_form.scss'


class WorkoutForm extends React.Component {
    constructor(props) {
        super(props)

        // this.getWorkout = this.getWorkout.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUserId)
    }

    getWorkout(type) {
      const intensity = this.props.currentUser.achievement
      this.props.getWorkout(type, intensity)
    }

    render() {
        if (this.props.currentUser === undefined) return null
        console.log(this.props.currentUser)
        console.log(this.props)
        return (
          <div className="workout-form-window">
            <div className="workout-form-title-parent">
              <h1 className="workout-form-title username">
                {this.props.currentUser.username}
              </h1>

              <h1 className="workout-form-title">
                What do you want to do today?
              </h1>
            </div>
            <div className="workout-buttons-container">
              <div className="cardio-button workout-form-button">
                <Link to="/workout">
                  <button onClick={() => {this.getWorkout("cardio")}}>Cardio</button>
                </Link>
              </div>
              <div className="strength-button workout-form-button">
                <Link to="/workout">
                  <button>Strength & Weights</button>
                </Link>
              </div>
              <div className="flexibility-button workout-form-button">
                <Link to="/workout">
                  <button>Balance & Flexibility</button>
                </Link>
              </div>
            </div>
          </div>
        );
    }
}

export default WorkoutForm;