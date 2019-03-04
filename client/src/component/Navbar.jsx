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

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li
            style={{ textDecoration: "none" }}
            className={this.state.loggedInUser ? "block" : "none"}
          >
            Hola {this.props.userInSession.name}
          </li>
          <li
            style={{ textDecoration: "none" }}
            className={this.state.loggedInUser ? "none" : "block"}
          >
            <Link to="/auth/signup">Signup</Link>
          </li>
          <li
            style={{ textDecoration: "none" }}
            className={this.state.loggedInUser ? "none" : "block"}
          >
            <Link to="/auth/login">Login</Link>
          </li>

          <li
            style={{ textDecoration: "none" }}
            className={this.state.loggedInUser ? "none" : "block"}
          >
            <Link to="/auth/signupPro">¿Eres profesional? Regístrate</Link>
          </li>

          <li
            style={{ textDecoration: "none" }}
            className={this.state.loggedInUser ? "block" : "none"}
          >
            <Link to="/" onClick={this.logout}>
              Logout
            </Link>
          </li>
          <li
            style={{ textDecoration: "none" }}
            className={
              this.state.loggedInUser && this.state.loggedInUser.rol === "user"
                ? "block"
                : "none"
            }
          >
            <Link to="/perfiluser">Mi perfil</Link>
          </li>
          <li
            style={{ textDecoration: "none" }}
            className={
              this.state.loggedInUser && this.state.loggedInUser.rol === "Pro"
                ? "block"
                : "none"
            }
          >
            <Link to="/perfilpro">Mi perfil</Link>
          </li>
          <li style={{ textDecoration: "none" }}>
            <Link to="/como-funciona/">¿Cómo funciona?</Link>
          </li>
          <li style={{ textDecoration: "none" }}>
            <Link to="/que-es-sph/">¿Qué es SPH?</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
