import { connect } from "react-redux";
import { fetchUser, patchUser } from "../../actions/user_actions";
import Profile from "./profile";

let _defaultState = {}

const mapSTP = (state = _defaultState, ownProps) => {
    debugger;
    return {
        user: state.entities.users[ownProps.match.params.id],
    }
};

const mapDTP = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    patchUser: (user) => dispatch(patchUser(user))
})

export default connect(mapSTP, mapDTP)(Profile);