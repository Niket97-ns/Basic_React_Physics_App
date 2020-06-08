import React, { Component } from "react";
import DownloadsNavBar from "../components/DownloadsNavBar";
import SideBar from "../components/SideBar";
import { Card } from "reactstrap";
import "../css/platform.css";

class Session extends Component {
  render() {
    return (
      <div>
        <DownloadsNavBar />

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
              <h2 className="ml-5" style={{ color: "white" }}>
                Download Previous Years Question Papers
              </h2>
              <div
                className=" ml-4 mr-4 "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "500px",
                  height: "420px",
                }}
              ></div>
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

export default Session;
