import React from 'react'
import { withRouter } from 'react-router-dom';

class UserWorkouts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedCat: "all",
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }


    render() {
        let { numStrength, numCardio, numFlex, totalWorkouts} = this.props.workoutSum
        return (
            <div className="user-workouts-parent">
                {/* Put in a classname for the date, align-self center it.
                Style the message
                Add filter for workout history here too? */}
                
                <div className="summary">
                    <p >You have completed {totalWorkouts} workouts.</p>
                    <p >You've completed {numStrength} strength workouts, {numCardio} cardio workouts, and {numFlex} flexibility workouts!</p>
                </div>

                <div className="user-workout-item wk-header">
                    <div className="name">Name</div>
                    {/* <div className="type">Type</div> */}
                    <div className="date">Date</div>
                    <div className="ints">Intensity</div>
                </div>

                <ul>
                    {
                        this.props.workouts.map((workout, i) => {
                            // Make a conditional dropdown so we filter our history on the frontend here
                            return <div key={i} className="user-workout-item">
                                <div className="name">{workout.name}</div>
                                {/* <div className="type">{workout.type}</div> */}
                                <div className="date">{workout.date}</div>
                                <div className="ints">{workout.intensity}</div>
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
