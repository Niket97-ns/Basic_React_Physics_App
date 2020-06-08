import React, { Component } from "react";
import "../css/desktop.css";
import AppNavbar from "../components/Navbar";
import SignInComponent from "../components/SignInComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import img3 from "../images/img3.jpg";
import instalogo from "../images/instalogo.jpg";
import facebooklogo from "../images/facebooklogo.jpg";
import twitterlogo from "../images/twitterlogo.jpg";

class Desktop extends Component {
  // componentDidMount() {
  //   document.body.className = "desktop_body";
  // }
  state = {
    boolLogin: false,
  };

  onClickLogin = () => {
    this.setState({
      boolLogin: !this.state.boolLogin,
    });
  };

  render() {
    return (
      <>
        <div>
          <div className="desktop_body">
            <AppNavbar boolLogin={this.onClickLogin} />
            {this.state.boolLogin ? <SignInComponent /> : null}
          </div>
          <div
            style={{
              // width: "800px",
              display: "block",
              marginLeft: "100px",
              marginRight: "100px",
              marginTop: "100px",
              textAlign: "center justify",
            }}
          >
            <h3>Welcome here!</h3>
            <p>
              Whether article spirits new her covered hastily sitting her. Money
              witty books nor son add. Chicken age had evening believe but
              proceed pretend mrs. At missed advice my it no sister. Miss told
              ham dull knew see she spot near can. Spirit her entire her called.
              Smallest directly families surprise honoured am an. Speaking
              replying mistress him numerous she returned feelings may day.
              Evening way luckily son exposed get general greatly. Zealously
              prevailed be arranging do. Set arranging too dejection september
              happiness. Understood instrument or do connection no appearance do
              invitation. Dried quick round it or order. Add past see west felt
              did any. Say out noise you taste merry plate you share. My resolve
              arrived is we chamber be removal.{" "}
            </p>
            <br />

            <p>
              Whether article spirits new her covered hastily sitting her. Money
              witty books nor son add. Chicken age had evening believe but
              proceed pretend mrs. At missed advice my it no sister. Miss told
              ham dull knew see she spot near can. Spirit her entire her called.
              Smallest directly families surprise honoured am an. Speaking
              replying mistress him numerous she returned feelings may day.
              Evening way luckily son exposed get general greatly. Zealously
              prevailed be arranging do. Set arranging too dejection september
              happiness. Understood instrument or do connection no appearance do
              invitation. Dried quick round it or order. Add past see west felt
              did any. Say out noise you taste merry plate you share. My resolve
              arrived is we chamber be removal.{" "}
            </p>
            <br />

            <p>
              Whether article spirits new her covered hastily sitting her. Money
              witty books nor son add. Chicken age had evening believe but
              proceed pretend mrs. At missed advice my it no sister. Miss told
              ham dull knew see she spot near can. Spirit her entire her called.
              Smallest directly families surprise honoured am an. Speaking
              replying mistress him numerous she returned feelings may day.
              Evening way luckily son exposed get general greatly. Zealously
              prevailed be arranging do. Set arranging too dejection september
              happiness. Understood instrument or do connection no appearance do
              invitation. Dried quick round it or order. Add past see west felt
              did any. Say out noise you taste merry plate you share. My resolve
              arrived is we chamber be removal.{" "}
            </p>
            <br />
            <p>
              Whether article spirits new her covered hastily sitting her. Money
              witty books nor son add. Chicken age had evening believe but
              proceed pretend mrs. At missed advice my it no sister. Miss told
              ham dull knew see she spot near can. Spirit her entire her called.
              Smallest directly families surprise honoured am an. Speaking
              replying mistress him numerous she returned feelings may day.
              Evening way luckily son exposed get general greatly. Zealously
              prevailed be arranging do. Set arranging too dejection september
              happiness. Understood instrument or do connection no appearance do
              invitation. Dried quick round it or order. Add past see west felt
              did any. Say out noise you taste merry plate you share. My resolve
              arrived is we chamber be removal.{" "}
            </p>
            <br />
            <img style={{ height: "400px", width: "100%" }} src={img3}></img>
            <br />
            <p>
              Whether article spirits new her covered hastily sitting her. Money
              witty books nor son add. Chicken age had evening believe but
              proceed pretend mrs. At missed advice my it no sister. Miss told
              ham dull knew see she spot near can. Spirit her entire her called.
              Smallest directly families surprise honoured am an. Speaking
              replying mistress him numerous she returned feelings may day.
              Evening way luckily son exposed get general greatly. Zealously
              prevailed be arranging do. Set arranging too dejection september
              happiness. Understood instrument or do connection no appearance do
              invitation. Dried quick round it or order. Add past see west felt
              did any. Say out noise you taste merry plate you share. My resolve
              arrived is we chamber be removal.{" "}
            </p>
            <br />
            <p>
              Whether article spirits new her covered hastily sitting her. Money
              witty books nor son add. Chicken age had evening believe but
              proceed pretend mrs. At missed advice my it no sister. Miss told
              ham dull knew see she spot near can. Spirit her entire her called.
              Smallest directly families surprise honoured am an. Speaking
              replying mistress him numerous she returned feelings may day.
              Evening way luckily son exposed get general greatly. Zealously
              prevailed be arranging do. Set arranging too dejection september
              happiness. Understood instrument or do connection no appearance do
              invitation. Dried quick round it or order. Add past see west felt
              did any. Say out noise you taste merry plate you share. My resolve
              arrived is we chamber be removal.{" "}
            </p>
          </div>
          <footer
            style={{
              display: "block",
              // marginLeft: "100px",
              // marginRight: "100px",
              marginTop: "100px",
              textAlign: "center justify",
              backgroundColor: "gray",
            }}
          >
            <div className="mt-4" style={{ paddingTop: "50px" }}>
              <h4 style={{ textAlign: "center" }}>EDUNOMICS</h4>
            </div>
            <div>
              <h6 style={{ textAlign: "center" }}>contact@edunomics.in</h6>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="ml-3 mr-3">
                <img
                  src={instalogo}
                  style={{ width: "25px", height: "25px" }}
                ></img>
              </div>
              <div className="ml-3 mr-3">
                <img
                  src={facebooklogo}
                  style={{ width: "25px", height: "25px" }}
                ></img>
              </div>
              <div className="ml-3 mr-3">
                <img
                  src={twitterlogo}
                  style={{ width: "25px", height: "25px" }}
                ></img>
              </div>
            </div>
            <div className="mt-4" style={{ textAlign: "center" }}>
              JOIN US | COOKIE POLICY | TERMS OF USE | TECH | PRIVACY POLICY
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Desktop;
