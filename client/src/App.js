import React, { Component } from "react";
import "./App.css";
import Home from "./component/Home";
import LoginUser from "./component/auth/LoginUser";
import SignupUser from "./component/auth/SignupUser";
import SignupPro from "./component/auth/SignupPro";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Perfiluser from "./component/perfil/Perfiluser";
import Perfilpro from "./component/perfil/Perfilpro";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth/loginUser" component={LoginUser} />
            <Route exact path="/auth/signup" component={SignupUser} />
            <Route exact path="/auth/signupPro" component={SignupPro} />
            <Route exact path="/perfiluser" component={Perfiluser} />
            <Route exact path="/perfilpro" component={Perfilpro} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
