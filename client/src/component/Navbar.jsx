import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Service from "./auth/Service";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new Service();
  }

  // getUser = userObj => {
  //   this.setState({
  //     loggedInUser: userObj
  //   });
  // };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className={this.state.loggedInUser ? "block" : "none"}>
            Bienvenido {this.props.userInSession.name}
          </li>
          <li className={this.state.loggedInUser ? "none" : "block"}>
            <Link to="/auth/signup">Signup</Link>
          </li>
          <li className={this.state.loggedInUser ? "none" : "block"}>
            <Link to="/auth/login">Login</Link>
          </li>

          <li className={this.state.loggedInUser ? "block" : "none"}>
            <a onClick={this.logout}>Logout</a>
          </li>
          <li
            className={
              this.state.loggedInUser && this.state.loggedInUser.rol === "user"
                ? "block"
                : "none"
            }
          >
            <Link to="/perfiluser">Página perfil</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
