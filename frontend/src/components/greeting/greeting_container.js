import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import { fetchUser } from "../../actions/user_actions";
import Greeting from "./greeting";


let _defaultState = {};

const mapStateToProps = (state = _defaultState, ownProps) => ({
  user: state.session.user,
  loggedIn: state.session.isAuthenticated
})
;

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Greeting)
);
