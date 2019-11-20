import WorkoutForm from './workout_form';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';

const msp = (state) => {
    console.log(state)
    return {
      currentUser: state.session.user.id
    };
}

const mdp = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id))
        // fetchWorkout: (id) => dispatch(fetchWorkout(id))
    }
}

export default connect(msp, mdp)(WorkoutForm)
