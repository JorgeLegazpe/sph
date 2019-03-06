import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div>
            <Link className="profesionales" to="/works/profesionales">
              <h1>Encuentra al profesional adecuado</h1>
            </Link>
            <img
              className="imgPrincipal"
              src="../../images/principal.jpg"
              alt="imagen principal"
            />
          </div>

          <div />
        </div>
      </div>
    );
  }
}
