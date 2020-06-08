import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  ButtonDropdown,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { withRouter, Link } from "react-router-dom";

class SessionNavBar extends Component {
  state = {
    isOpen: false,
    selectClassDropDown: false,
    selectElDropDown: false,
    selectTwDropDown: false,
    selectElPhDropDown: false,
    selectElMaDropDown: false,
    selectTwPhDropDown: false,
    selectTwMaDropDown: false,
    dropdownOpen: false,
  };

  myAccountToggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  selectClassOpen = () => {
    this.setState({
      selectClassDropDown: !this.state.selectClassDropDown,
    });
  };

  selectElOpen = () => {
    this.setState({
      selectElDropDown: !this.state.selectElDropDown,
    });
  };

  selectTwOpen = () => {
    this.setState({
      selectTwDropDown: !this.state.selectTwDropDown,
    });
  };

  selectElPhOpen = () => {
    this.setState({
      selectElPhDropDown: !this.state.selectElPhDropDown,
    });
  };

  selectElMaOpen = () => {
    this.setState({
      selectElMaDropDown: !this.state.selectElMaDropDown,
    });
  };

  selectTwPhOpen = () => {
    this.setState({
      selectTwPhDropDown: !this.state.selectTwPhDropDown,
    });
  };
  selectTwMaOpen = () => {
    this.setState({
      selectTwMaDropDown: !this.state.selectTwMaDropDown,
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
              Home/Sessions
            </NavbarBrand>
            <NavItem style={{ listStyleType: "none" }}>
              <ButtonDropdown
                isOpen={this.state.selectClassDropDown}
                toggle={this.selectClassOpen}
              >
                <DropdownToggle color="white">Select Class</DropdownToggle>

                <DropdownMenu>
                  <ButtonDropdown
                    isOpen={this.state.selectElDropDown}
                    toggle={this.selectElOpen}
                  >
                    <DropdownToggle color="white">11th</DropdownToggle>
                    <DropdownMenu>
                      {/* 11th Physics */}
                      <ButtonDropdown
                        direction="right"
                        isOpen={this.state.selectElPhDropDown}
                        toggle={this.selectElPhOpen}
                      >
                        <DropdownToggle color="white">Physics</DropdownToggle>
                        <DropdownMenu>
                          <Button color="white">Gravity</Button>
                          <Button color="white">Thermodynamic</Button>
                        </DropdownMenu>
                      </ButtonDropdown>

                      {/* 11th Maths */}
                      <ButtonDropdown
                        direction="right"
                        isOpen={this.state.selectElMaDropDown}
                        toggle={this.selectElMaOpen}
                      >
                        <DropdownToggle color="white">Maths</DropdownToggle>
                        <DropdownMenu>
                          <Button color="white">Sets</Button>
                          <Button color="white">Linear Algebra</Button>
                          <Button color="white">Quadratic Eqns</Button>
                          <Button color="white">Triangles</Button>
                          <Button color="white">Symmetry</Button>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </DropdownMenu>
                  </ButtonDropdown>

                  <ButtonDropdown
                    isOpen={this.state.selectTwDropDown}
                    toggle={this.selectTwOpen}
                  >
                    <DropdownToggle color="white">12th</DropdownToggle>
                    <DropdownMenu>
                      {/* 12th Physics */}
                      <ButtonDropdown
                        direction="right"
                        isOpen={this.state.selectTwPhDropDown}
                        toggle={this.selectTwPhOpen}
                      >
                        <DropdownToggle color="white">Physics</DropdownToggle>
                        <DropdownMenu>
                          <Button color="white">Magnetism</Button>
                          <Button color="white">Force</Button>
                        </DropdownMenu>
                      </ButtonDropdown>

                      {/* 12th Maths */}
                      <ButtonDropdown
                        direction="right"
                        isOpen={this.state.selectTwMaDropDown}
                        toggle={this.selectTwMaOpen}
                      >
                        <DropdownToggle color="white">Maths</DropdownToggle>
                        <DropdownMenu>
                          <Button color="white">Sequences</Button>
                          <Button color="white">Trignometry</Button>
                          <Button color="white">Circles</Button>
                          <Button color="white">Similiarity</Button>
                          <Button color="white">Locus</Button>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </DropdownMenu>
                  </ButtonDropdown>
                </DropdownMenu>
              </ButtonDropdown>
            </NavItem>

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

export default withRouter(SessionNavBar);
