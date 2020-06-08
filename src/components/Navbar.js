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
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import SignUp from "../react-routes/SignUp";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  onClickSignUp = () => {
    const { history } = this.props;
    if (history) {
      this.props.history.push("/Physics/SignUpPage");
    }
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="transparent" dark expand="sm" className="mb-5">
          <Container className="ml-0">
            <NavbarBrand href="" style={{ color: "black" }}>
              Welcome to Edunomics
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar></Nav>
            </Collapse>
            <NavItem style={{ listStyleType: "none" }}>
              <Button
                onClick={this.props.boolLogin}
                color="white"
                size="m"
                style={{
                  color: "white",
                  marginRight: "auto",
                  width: "auto",
                  height: "auto",
                }}
              >
                Login
              </Button>
            </NavItem>

            <NavItem className="ml-4" style={{ listStyleType: "none" }}>
              <Button
                onClick={this.onClickSignUp}
                outline="white"
                size="m"
                style={{
                  color: "white",
                  width: "auto",
                  marginRight: "auto",
                  height: "auto",
                  borderRadius: "20px",
                  borderColor: "white",
                }}
              >
                Sign Up
              </Button>
            </NavItem>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(AppNavbar);
