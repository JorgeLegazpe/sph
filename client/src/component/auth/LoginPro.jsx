import React, { Component } from "react";
import "./LoginPro.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>ESTE ES EL LOGIN DE PROFESIONALES</h1>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            id=""
            placeholder="Username"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="text"
            name="password"
            id=""
            placeholder="Password"
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
        <div>
          <p>
            Si no tienes cuenta, regístrate
            <Link to="/auth/signupPro">aquí</Link>
          </p>
        </div>
        <button>
          <Link to="/">Volver a la Home</Link>
        </button>
      </div>
    );
  }
}
