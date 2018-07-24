import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import ROUTES from "../config/app_routes";
import AuthenticatedComponent from "./authenticated_component";
import AuthenticatedHeader from "../containers/auth_header";
import PublicHeader from "./public_header";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href={ROUTES.HOME}>Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <AuthenticatedComponent
                component={AuthenticatedHeader}
                publicComponent={PublicHeader}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
