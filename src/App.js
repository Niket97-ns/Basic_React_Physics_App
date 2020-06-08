import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Desktop from "./react-routes/Desktop";
import SignUp from "./react-routes/SignUp";
import Platform from "./react-routes/Platform";
import Sessions from "./react-routes/Sessions";
import Downloads from "./react-routes/Downloads";

import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/Physics/Desktop" component={Desktop} />
      <Route exact path="/Physics/SignUpPage" component={SignUp} />
      <Route exact path="/Physics/Platform" component={Platform} />
      <Route exact path="/Physics/Sessions" component={Sessions} />
      <Route exact path="/Physics/Downloads" component={Downloads} />
    </div>
  );
}

export default App;
