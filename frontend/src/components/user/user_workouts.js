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
        let chosenStyle = {}; // TODO: width too truncated in firefox!
        // if (this.state.value === "all") {
        //     chosenStyle = { width: "20px" };
        // } else if (this.state.value === "cardio") {
        //     chosenStyle = {width: "50px" };
        // } else {
        //     chosenStyle = {};
        // }
        const filter = () => (
            <select onChange={this.handleChange} value={this.state.value} style = {chosenStyle}>
                <option value="all">all</option>
                <option value="strength">strength</option>
                <option value="cardio">cardio</option>
                <option value="flexibility">flexibility</option>
            </select> 
        )

        const newWorkout = () => (
            <span onClick={() => this.props.history.push("/workoutnew")}>here</span>  
        )


        return (
            <div className="user-workouts-parent">                
                <div className="user-workouts-summary">
                    <p >You have completed {totalWorkouts} workouts.</p>
                    <p >You've completed {numStrength} strength workouts, {numCardio} cardio workouts, and {numFlex} flexibility workouts!</p>
                    <p >View {filter()} workouts below, or click {newWorkout()} to start a new one!</p>
                </div>

                <div className="user-workout-item wk-header">
                    <div className="name">Name</div>
                    {/* <div className="type">Type</div> */}
                    <div className="date">Date</div>
                    <div className="ints">Intensity</div>
                </div>
                <div className="shadow s_cover">{/*Cover*/} &nbsp; </div>
                <div className="shadow s_main">     &nbsp;  {/*Shadow*/}</div>
                <ul className="user-workouts-list">
                    {
                        this.props.workouts.map((workout, i) => {
                            if(this.state.value === "all" || this.state.value === workout.type) {
                            return <div key={i} className={`user-workout-item`}>
                                <div className="name">{workout.name}</div>
                                {/* <div className="type">{workout.type}</div> */}
                                <div className="date">{workout.date}</div>
                                <div className="ints">{workout.intensity}</div>
                            </div>
                            }
                        })
                    }
                </ul> 
                {/* <button onClick={() => this.props.history.push("/workoutnew")}>Start a new workout!</button> */}
            </div>
        )
    }
}

export default withRouter(UserWorkouts);
