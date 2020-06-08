import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <div>
        <div className="mt-4">
          <h2>
            <Link
              className="link"
              style={{ color: "white" }}
              to="/Physics/Platform"
            >
              Home
            </Link>
          </h2>
        </div>
        <div className="mt-4">
          <h2>
            <Link
              className="link"
              style={{ color: "white" }}
              to="/Physics/Sessions"
            >
              Sessions
            </Link>
          </h2>
        </div>
        <div className="mt-4">
          <h2>
            <Link
              className="link"
              style={{ color: "white" }}
              to="/Physics/Downloads"
            >
              Downloads
            </Link>
          </h2>
        </div>
        <div className="mt-4">
          <h2>
            <Link
              className="link"
              style={{ color: "white" }}
              to="/Physics/Settings"
            >
              Settings
            </Link>
          </h2>
        </div>
        <div className="mt-4">
          <h2>
            <Link
              className="link"
              style={{ color: "white" }}
              to="/Physics/About"
            >
              About
            </Link>
          </h2>
        </div>
      </div>
    );
  }
}

export default withRouter(SideBar);
