import React, { Component } from "react";
import PlatformNavbar from "../components/PlatformNavbar";
import SideBar from "../components/SideBar";
import { Card } from "reactstrap";
import "../css/platform.css";
import { Link, withRouter } from "react-router-dom";

class Platform extends Component {
  render() {
    return (
      <div>
        <PlatformNavbar />

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "90%",
          }}
        >
          <div
            style={{ width: "20%", height: "842px", backgroundColor: "gray" }}
          >
            <SideBar />
          </div>

          <div style={{ width: "100%", height: "100%" }}>
            <div
              style={{
                backgroundColor: "teal",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                className=" ml-4 mr-4 "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <table>
                  <tr>
                    <td>
                      <Link to="/Physics/Sessions" style={{ color: "white" }}>
                        <Card className="top_cards" style={{ color: "black" }}>
                          All interactive Sessions
                        </Card>
                      </Link>
                    </td>
                    <td>
                      <Card className="top_cards">Practice Questions</Card>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Physics/Downloads" style={{ color: "white" }}>
                        <Card className="top_cards" style={{ color: "black" }}>
                          Downloads
                        </Card>
                      </Link>
                    </td>
                    <td>
                      <Card className="top_cards">Ask Questions</Card>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "100%",
                height: "100%",
                border: "1px solid",
              }}
            >
              <div
                className=" ml-2 mr-2 "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <table>
                  <tr>
                    <td>
                      <Card className="bottom_cards">Topics Covered</Card>
                    </td>
                    <td>
                      <Card className="bottom_cards">Recent Activity</Card>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: "20%" }}>
                      <Card className="bottom_cards">Performance</Card>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Platform);
