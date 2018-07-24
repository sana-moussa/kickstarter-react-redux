import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Redirect, Route } from "react-router";
import { LOGIN, loginUser } from "../actions/authentication";
import LoginForm from "../components/login_form";
import { ROUTES } from "../config";

class Authentication extends Component {
  handleLoginSubmit = values => {
    let username = values.username || "";
    let password = values.password || "";

    return this.props.loginUser(username, password);
  };

  renderLoginForm = () => {
    let form = () => (
      <LoginForm
        onSubmit={this.handleLoginSubmit}
        loggingIn={this.props.loggingIn}
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
    if (this.props.user.isAuthenticated) {
      return <Redirect to={ROUTES.HOME} />;
    }

    return (
      <React.Fragment>
        <Route path={ROUTES.LOGIN} render={this.renderLoginForm} />
      </React.Fragment>
    );
  }
}

Authentication.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loggingIn: PropTypes.bool,
  isSendingEmail: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loginUser
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    loggingIn: state.requests[LOGIN],
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
