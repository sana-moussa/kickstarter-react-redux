import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../config";

class PublicHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Account
          </DropdownToggle>
          <DropdownMenu right>
            <NavLink to={ROUTES.LOGIN} className="dropdown-item">
              Login
            </NavLink>
            <DropdownItem divider />
            <NavLink to={ROUTES.REGISTRATION} className="dropdown-item">
              Registration
            </NavLink>
          </DropdownMenu>
        </UncontrolledDropdown>
      </React.Fragment>
    );
  }
}
export default PublicHeader;
