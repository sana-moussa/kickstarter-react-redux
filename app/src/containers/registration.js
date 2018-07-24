import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Redirect, Route } from "react-router";
import { REGISTRATION, registerUser } from "../actions/registration";
import RegistrationForm from "../components/registration_form";
import { ROUTES } from "../config";

class Registration extends Component {
  handleRegistrationSubmit = values => {
    let email = values.email || "";
    let username = values.username || "";
    let password = values.password || "";

    return this.props.registerUser(email, username, password);
  };

  renderRegistrationForm = () => {
    let form = () => (
      <RegistrationForm
        onSubmit={this.handleRegistrationSubmit}
        isRegistering={this.props.isRegistering}
      />
    );

    return this.renderForm(form);
  };

  renderForm = Form => {
    return (
      <div className="col-sm-12">
        <div className="padding-wrap">
          <Form />
        </div>
      </div>
    );
  };

  render() {
    if (this.props.registering.isRegistered) {
      return <Redirect to={ROUTES.LOGIN} />;
    }

    return (
      <React.Fragment>
        <Route
          path={ROUTES.REGISTRATION}
          render={this.renderRegistrationForm}
        />
      </React.Fragment>
    );
  }
}

Registration.propTypes = {
  registerUser: PropTypes.func.isRequired,
  registering: PropTypes.object.isRequired,
  isRegistering: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      registerUser
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    isRegistering: state.requests[REGISTRATION],
    registering: state.registering
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
