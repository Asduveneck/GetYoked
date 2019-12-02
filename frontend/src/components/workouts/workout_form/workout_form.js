import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './workout_form.scss'


class WorkoutForm extends React.Component {
    constructor(props) {
        super(props)

        this.getWorkout = this.getWorkout.bind(this)
    }

    componentDidMount() {
      this.props.fetchUser(this.props.currentUserId)
    }

    componentDidUpdate(prevProps) {
      if (this.props.currentUser === undefined) {
        this.props.fetchUser(this.props.currentUserId)
      }
    }

    getWorkout(type) {
      console.log("workout form props, pressing submit")
      console.log(this.props)
      const intensity = this.props.currentUser.achievement
      this.props.getWorkout(type, intensity)
        .then(res => {
          console.log(res)
          this.props.history.push(`/workout?workoutId=${res.workout.data._id}`)
        })
    }

    render() {
        if (this.props.currentUser === undefined) return null;
        
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
                  <button onClick={() => {this.getWorkout("cardio")}}>Cardio</button>
              </div>
              <div className="strength-button workout-form-button">
                  <button onClick={() => {this.getWorkout("strength")}}>Strength & Weights</button>
              </div>
              <div className="flexibility-button workout-form-button">
                  <button onClick={() => {this.getWorkout("flexibility")}}>Balance & Flexibility</button>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(WorkoutForm);