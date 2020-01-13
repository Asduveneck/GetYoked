import React from 'react'
import { withRouter } from 'react-router-dom';

class UserWorkouts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "all",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }


    render() {
        let { numStrength, numCardio, numFlex, totalWorkouts} = this.props.workoutSum
        const allStyle = {width: "20px"};
        let chosenStyle = {};
        if (this.state.value === "all") {
            chosenStyle = allStyle
        } else {
            chosenStyle = {}
        }
        const filter = () => (
            <select onChange={this.handleChange} value={this.state.value} style = {chosenStyle}>
                <option value="all">all</option>
                <option value="strength">strength</option>
                <option value="cardio">cardio</option>
                <option value="flexibility">flexibility</option>
            </select> 
        )


        return (
            <div className="user-workouts-parent">
                {/* Put in a classname for the date, align-self center it.
                Style the message
                Add filter for workout history here too? */}
                
                <div className="user-workouts-summary">
                    <p >You have completed {totalWorkouts} workouts.</p>
                    <p >You've completed {numStrength} strength workouts, {numCardio} cardio workouts, and {numFlex} flexibility workouts!</p>
                    <p >View {filter()} workouts below, or <span>start a new one!</span>  
                    </p>
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
                            if(this.state.value === "all" || this.state.value === workout.type) {
                            return <div key={i} className="user-workout-item">
                                <div className="name">{workout.name}</div>
                                {/* <div className="type">{workout.type}</div> */}
                                <div className="date">{workout.date}</div>
                                <div className="ints">{workout.intensity}</div>
                            </div>
                            }
                        })
                    }
                </ul> 
                <button onClick={() => this.props.history.push("/workoutnew")}>Start a new workout!</button>
            </div>
        )
    }
}

export default withRouter(UserWorkouts);
