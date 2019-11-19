import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Greeting)
);
