import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PropTypes } from "prop-types";
import { NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../actions/authentication";
import { ROUTES } from "../config";

class AuthenticatedHeader extends React.Component {
  handleLogout() {
    this.props.logoutUser();
  }

  render() {
    return (
      <React.Fragment>
        <NavItem>
          <NavLink to={ROUTES.README} className="nav-link">
            ReadMe
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={ROUTES.CONTACT} className="nav-link">
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="#"
            onClick={this.handleLogout.bind(this)}
            className="nav-link"
          >
            Logout
          </NavLink>
        </NavItem>
      </React.Fragment>
    );
  }
}

AuthenticatedHeader.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logoutUser
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(AuthenticatedHeader);
