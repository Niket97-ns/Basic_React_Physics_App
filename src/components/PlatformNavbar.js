import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";

class PlatformNavbar extends Component {
  state = {
    isOpen: false,
    dropdownOpen: false,
  };

  myAccountToggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="transparent" dark expand="sm" className="mb-0">
          <Container className="ml-0">
            <NavbarBrand href="" style={{ color: "black" }}>
              Welcome to Edunomics
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar></Nav>
            </Collapse>
            <NavItem className="ml-4" style={{ listStyleType: "none" }}>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.myAccountToggle}
              >
                <DropdownToggle
                  size="m"
                  style={{
                    color: "black",
                    width: "auto",
                    marginRight: "auto",
                    height: "auto",
                    borderRadius: "20px",
                    borderColor: "gray",
                  }}
                >
                  My Account
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Profile</DropdownItem>
                  <DropdownItem>
                    <Link to="/Physics/Desktop">Logout</Link>
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </NavItem>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(PlatformNavbar);
