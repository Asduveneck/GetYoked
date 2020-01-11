import React from 'react'
import { withRouter } from 'react-router-dom';

class UserWorkouts extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }
    render() {
      
        return (
            <div className="user-workouts-parent">
                {/* Put in a classname for the date, align-self center it.
                Put in a message.
                Add filter for workout history here too? */}


                <ul>
                    {
                        this.props.workouts.map((workout, i) => {
                            return <div key={i} className="user-workout-item">
                                <div className="name">{workout.name}</div>
                                <div className="date">{workout.date}</div>
                                <div className="ints">Intensity: {workout.intensity}</div>
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
