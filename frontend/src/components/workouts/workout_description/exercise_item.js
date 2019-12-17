import React from 'react'

class ExerciseItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="exercise-item-container">
                <div className="exercise-name">
                    {this.props.exercise.name}
                </div>
                <div className="exercise-description">
                    {this.props.exercise.description.split('$').map( (step, idx) => {
                        let new_key = this.props.exercise.name + "_step_" + idx;
                        return <li key = {new_key}>{step}</li>
                    })}
                </div>
            </div>
        );
        }
}


export default ExerciseItem