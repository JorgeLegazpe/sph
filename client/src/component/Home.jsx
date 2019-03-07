import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div>
            <Link to="/works/profesionales">
              <img
                className="imgPrincipal"
                src="../../images/principal.jpg"
                alt="imagen principal"
              />
            </Link>
          </div>

          <div />
        </div>
      </div>
    );
  }
}
