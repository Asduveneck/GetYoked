import React from 'react';
import { Link } from 'react-router-dom';
import './workout_form.scss'


class WorkoutForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUserId)
    }

    render() {
        if (this.props.currentUser === undefined) return null
        console.log(this.props.currentUser)
        console.log(this.props)
        return (
          <div className="workout-form-window">
            <div className="workout-form-title-parent">
                <h1 className="workout-form-title username">{this.props.currentUser.username}</h1>
                
                <h1 className="workout-form-title">What do you want to do today?</h1>
            </div>
                <div className="workout-buttons-container">
                <div className="cardio-button workout-form-button">
                    <button>Cardio</button>
                </div>
                <div className="strength-button workout-form-button">
                    <button>Strength & Weights</button>
                </div>
                <div className="flexibility-button workout-form-button">
                    <button>Balance & Flexibility</button>
                </div>
            </div>
          </div>
        );
    }
}

export default WorkoutForm;