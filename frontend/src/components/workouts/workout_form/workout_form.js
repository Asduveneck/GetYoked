import React from 'react';
import { Link } from 'react-router-dom';


class WorkoutForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id)
    }

    render() {
        console.log(this.props.currentUser)
        return(
            <div>
                <div className="cardio-button">
                    {/* <Link to={`/workouts?=...`}></Link> */}
                </div>
            </div>
        )
    }
}

export default WorkoutForm;