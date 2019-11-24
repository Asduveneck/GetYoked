import React from 'react'

class ExerciseItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("exercise props")
        console.log(this.props)
        return (
            <div className="exercise-item-container">
                <div className="exercise-name">{this.props.exercise.name}</div>
                <div className="exersice-description">{this.props.exercise.description}</div>
            </div>
        )
    }
}


export default ExerciseItem