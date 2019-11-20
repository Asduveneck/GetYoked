import { connect } from "react-redux";
import { signup, clearSessionErrors } from "../../actions/session_actions";
import SignUp from "./signup_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
