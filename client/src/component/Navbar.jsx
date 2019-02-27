import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/auth/signupUser">Signup</Link>
            </li>
            <li>
              <Link to="/auth/loginUser">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
