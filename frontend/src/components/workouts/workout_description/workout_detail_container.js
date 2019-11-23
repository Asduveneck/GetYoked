import { connect } from 'react-redux';
import WorkoutDetail from './workout_detail';
import { getOneWorkout } from '../../../actions/workout_actions'
import { fetchUser } from "../../../actions/user_actions";
import queryString from "query-string";

const msp = (state, ownProps) => {

    const values = queryString.parse(ownProps.location.search)

    return {
      workout: state.entities.workouts[values.workoutId],
      workoutId: values.workoutId,
      currentUserId: state.session.user.id,
      currentUser: state.entities.users[state.session.user.id]
    };
}

const mdp = dispatch => {
    return {
      fetchWorkout: id => dispatch(getOneWorkout(id)),
      fetchUser: id => dispatch(fetchUser(id))
    };
}

export default connect(msp, mdp)(WorkoutDetail)