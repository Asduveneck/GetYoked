import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import Profile from "./profile";

const mapSTP = (state, ownProps) => ({
    user: state.users[ownProps.match.params.id],

});

const mapDTP = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapSTP, mapDTP)(Profile);