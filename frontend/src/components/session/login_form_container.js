import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from './login_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    signedIn: state.session.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
