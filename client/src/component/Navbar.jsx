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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" class="navbar-brand nav-link">
          SPH
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/que-es-sph/" className="nav-link">
                ¿Qué es SPH?
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/como-funciona/" className="nav-link">
                ¿Cómo funciona?
              </Link>
            </li>
            <li
              className="nav-item"
              className={this.state.loggedInUser ? "none" : "block"}
            >
              <Link to="/auth/signupPro" className="nav-link">
                ¿Eres profesional? Regístrate
              </Link>
            </li>
            <li
              className="nav-item"
              className={this.state.loggedInUser ? "none" : "block"}
            >
              <Link to="/auth/signup" className="nav-link">
                Signup
              </Link>
            </li>
            <li
              className="nav-item"
              className={this.state.loggedInUser ? "none" : "block"}
            >
              <Link to="/auth/login" className="nav-link">
                Login
              </Link>
            </li>
            <li
              className="nav-item"
              className={this.state.loggedInUser ? "block" : "none"}
            >
              <Link to="/" className="nav-link" onClick={this.logout}>
                Logout
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ textDecoration: "none" }}
              className={
                this.state.loggedInUser &&
                this.state.loggedInUser.rol === "user"
                  ? "block"
                  : "none"
              }
            >
              <Link to="/perfiluser" className="nav-link">
                Mi perfil
              </Link>
            </li>
            <li
              className="nav-item"
              className={
                this.state.loggedInUser && this.state.loggedInUser.rol === "Pro"
                  ? "block"
                  : "none"
              }
            >
              <Link to="/perfilpro" className="nav-link">
                Mi perfil
              </Link>
            </li>{" "}
          </ul>
        </div>
      </nav>
    );
  }
}
