import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { ROUTES } from "../config";

const AuthenticatedRoute = ({ isAuthenticated, component, ...args }) => (
  <Route
    {...args}
    render={props => {
      return isAuthenticated ? (
        React.createElement(component, { ...props })
      ) : (
        <Redirect to={ROUTES.LOGIN} />
      );
    }}
  />
);

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
}

AuthenticatedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(AuthenticatedRoute);
