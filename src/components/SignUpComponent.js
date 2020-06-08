import React, { Component } from "react";
import "../css/signUp.css";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";
import { withRouter } from "react-router-dom";

class SignUpComponent extends Component {
  onClickSignUp = () => {
    const { history } = this.props;
    if (history) {
      this.props.history.push("/Physics/Desktop");
    }
  };

  render() {
    return (
      <div>
        <Card className="signUpCard bg-primary">
          <h3
            className="d-flex justify-content-center mt-2"
            style={{ color: "white" }}
          >
            SIGN UP
          </h3>
          <Form className="ml-4 mr-4 mb-4 mt-4">
            <FormGroup>
              <Label for="name" style={{ color: "white" }}>
                Name
              </Label>
              <Input
                style={{ width: "300px" }}
                type="text"
                name="name"
                id="name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email" style={{ color: "white" }}>
                Email
              </Label>
              <Input
                style={{ width: "300px" }}
                type="email"
                name="email"
                id="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" style={{ color: "white" }}>
                Password
              </Label>
              <Input
                style={{ width: "300px" }}
                type="password"
                name="password"
                id="password"
                className="mb-3"
              />
            </FormGroup>
            <FormGroup>
              <Label for="mobile_number" style={{ color: "white" }}>
                Mobile Number
              </Label>
              <Input
                style={{ width: "300px" }}
                type="tel"
                name="mobile_number"
                id="mobile_numer"
                className="mb-3"
                pattern="[+]{1}[0-9]{11,14}"
              />
            </FormGroup>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={this.onClickSignUp}
                outline="white"
                size="sm"
                style={{
                  color: "white",
                  marginTop: "2rem",
                  width: "100px",
                  height: "50px",
                  borderRadius: "20px",
                  borderColor: "white",
                }}
                block
              >
                Sign Up
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    );
  }
}

export default withRouter(SignUpComponent);
