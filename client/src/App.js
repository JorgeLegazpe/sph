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
import Profesionales from "./component/Profesionales";
import Presupuesto from "./component/Presupuesto";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false
    };
  }

  changeUser = user => {
    this.setState({ ...this.state, user });
  };

  render() {
    return (
      <div>
        <nav>
          <Navbar userInSession={this.state.user} />
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/auth/login"
            render={() => <LoginUser change={this.changeUser} />}
          />
          <Route
            exact
            path="/auth/signup"
            render={() => <SignupUser change={this.changeUser} />}
          />
          <Route
            exact
            path="/auth/signupPro"
            render={() => <SignupPro change={this.changeUser} />}
          />
          <Route
            exact
            path="/perfiluser"
            render={() => <Perfiluser userInSession={this.state.user} />}
          />

          <Route
            exact
            path="/perfilpro"
            render={() => <Perfilpro userInSession={this.state.user} />}
          />
          <Route
            exact
            path="/works/profesionales"
            render={() => <Profesionales userInSession={this.state.user} />}
          />
          <Route
            exact
            path="/works/presupuesto"
            render={() => <Presupuesto userInSession={this.state.user} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
