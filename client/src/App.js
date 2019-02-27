import React, { Component } from "react";
import "./App.css";
import Home from "./component/Home";
import LoginUser from "./component/auth/LoginUser";
import LoginPro from "./component/auth/LoginPro";
import SignupUser from "./component/auth/SignupUser";
import SignupPro from "./component/auth/SignupPro";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth/loginUser" component={LoginUser} />
            <Route exact path="/auth/signupUser" component={SignupUser} />
            <Route exact path="/auth/loginPro" component={LoginPro} />
            <Route exact path="/auth/signupPro" component={SignupPro} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
