import WorkoutForm from './workout_form';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';
import { getWorkout } from '../../../actions/workout_actions';

const msp = (state, ownProps) => {
    return {
      currentUserId: state.session.user.id,
      currentUser: state.entities.users[state.session.user.id]
    };
}

const mdp = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
        getWorkout: (type, intensity) => dispatch(getWorkout(type, intensity))
    }
}

export default connect(msp, mdp)(WorkoutForm)
