import React, { Component } from "react";
import "../css/signIn.css";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";
import { withRouter } from "react-router-dom";

class SignInComponent extends Component {
  state = {
    email: "",
    password: "",
  };

  onClickLogin = () => {
    if (this.state.email === "admin" && this.state.password === "1234") {
      const { history } = this.props;
      if (history) {
        this.props.history.push("/Physics/Platform");
      }
    } else {
      alert("Invalid Login Credentials");
    }
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Card className="signInCard ">
          <Form className="ml-4 mr-4 mb-4 mt-4">
            <FormGroup>
              <Label for="email" style={{ color: "black" }}>
                Email Id/Phone Number
              </Label>
              <Input
                style={{ width: "300px" }}
                type="text"
                name="email"
                id="email"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" style={{ color: "black" }}>
                Password
              </Label>
              <Input
                style={{ width: "300px" }}
                type="password"
                name="password"
                id="password"
                className="mb-3"
                onChange={this.onChange}
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
                onClick={this.onClickLogin}
                outline="white"
                size="sm"
                style={{
                  color: "black",
                  marginTop: "2rem",
                  width: "100px",
                  height: "50px",
                  borderRadius: "20px",
                  borderColor: "white",
                }}
                block
              >
                Login
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    );
  }
}

export default withRouter(SignInComponent);
