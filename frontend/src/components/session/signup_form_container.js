import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, clearSessionErrors } from "../../actions/session_actions";
import SignUp from "./signup_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
