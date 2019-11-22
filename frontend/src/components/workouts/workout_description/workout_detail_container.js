import { connect } from 'react-redux';
import WorkoutDetail from './workout_detail';

const msp = (state, ownProps) => {
    console.log("ownProps")
    console.log(ownProps)
    console.log("state")
    console.log(state)
    return {

    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, mdp)(WorkoutDetail)