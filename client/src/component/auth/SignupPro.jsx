import React, { Component } from "react";
import "./SignupPro.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>ESTE ES EL SIGN UP DE PROFESIONALES</h1>
        <div>
          <form action="submit" onSubmit={e => this.handleSubmit(e)}>
            <label for="empresa">Empresa</label>
            <input
              type="text"
              value=""
              name="empresa"
              onChange={e => this.handleChange(e)}
            />
            <label for="usuario">Persona de contacto</label>
            <input
              type="text"
              value=""
              name="usuario"
              onChange={e => this.handleChange(e)}
            />
            <label for="password">Password</label>
            <input
              type="text"
              value=""
              name="password"
              onChange={e => this.handleChange(e)}
            />
            <label for="email">Email</label>
            <input
              type="text"
              value=""
              name="email"
              onChange={e => this.handleChange(e)}
            />
            <label for="telefono">Teléfono</label>
            <input
              type="text"
              value=""
              name="telefono"
              onChange={e => this.handleChange(e)}
            />
            <label for="ubicacion">Ubicación</label>
            <input
              type="text"
              value=""
              name="ubicacion"
              onChange={e => this.handleChange(e)}
            />
            <label for="tipo">Tipo de profesión</label>
            <select>
              <option value="fontanero">Fontanero</option>
              <option value="electricista">Electricista</option>
              <option value="carpintero">Carpintero</option>
              <option value="cristalero">Cristalero</option>
              <option value="albañil">Albañil</option>
            </select>
            <input type="submit" />
          </form>
        </div>
        <button>
          <Link to="/">Volver a la Home</Link>
        </button>
      </div>
    );
  }
}
