import React from 'react';
import { Link } from 'react-router-dom';


class WorkoutForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
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