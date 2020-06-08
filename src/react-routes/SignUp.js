import React, { Component } from "react";
import "../css/signUp.css";
import img2 from "../images/img2.jpg";

import SignUpComponent from "../components/SignUpComponent";

class SignUp extends Component {
  render() {
    return (
      <>
        <div className="signUpBody">
          <img className="signUpImage" src={img2}></img>
          <SignUpComponent />
        </div>
      </>
    );
  }
}

export default SignUp;
