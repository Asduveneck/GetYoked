import React from 'react'
import { withRouter } from 'react-router-dom';

class UserWorkouts extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }
    render() {
      
        return (
            <div className="user-workouts-parent">
                <ul>
                    {
                        this.props.workouts.map((workout, i) => {
                            return <div key={i} className="user-workout-item">
                                <div>{workout.name}</div>
                                <div>{workout.date}</div>
                                <div>Intensity: {workout.intensity}</div>
                            </div>
                        })
                    }
                </ul> 
                <button onClick={() => this.props.history.push("/workoutnew")}>Start a new wokout!</button>
            </div>
        )
    }
}

export default withRouter(UserWorkouts);
