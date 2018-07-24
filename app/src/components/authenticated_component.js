import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AuthenticatedComponent = ({
  isAuthenticated,
  component,
  publicComponent,
  ...args
}) => {
  return isAuthenticated
    ? React.createElement(component, { ...args })
    : React.createElement(publicComponent, { ...args });
};

AuthenticatedComponent.propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.func
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
}

export default connect(mapStateToProps)(AuthenticatedComponent);
