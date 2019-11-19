import WorkoutForm from './workout_form';
import { connect } from 'react-redux';

const msp = (state) => {
    return {
      currentUser: state.session.user
    //   FIND: need to acess workout
    };
}

const mdp = dispatch => {
    return {
        fetchWorkout: (id) => dispatch(fetchWorkout(id))
    }
}

export default connect(msp, mdp)(WorkoutForm)
