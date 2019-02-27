import React, { Component } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

export default class Search extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <p>Elige el profesional que necesitas</p>
          <select>
            <option value="todos">Todas las profesiones</option>
            <option value="fontanero">Fontanero</option>
            <option value="electricista">Electricista</option>
            <option value="carpintero">Carpintero</option>
            <option value="cristalero">Cristalero</option>
            <option value="albañil">Albañil</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            name="ubicacion"
            placeholder="Introduce tu ubicación"
          />
        </div>
      </div>
    );
  }
}
