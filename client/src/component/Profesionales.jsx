import React, { Component } from "react";
import "./Profesionales.css";
import Service from "./auth/Service";
import { NavLink, Link } from "react-router-dom";
import Maps from "./Maps";

export default class Profesionales extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, profesionales: [], typePro: "" };
    this.service = new Service();
    this.search();
    this.filterPro = "";
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  search() {
    this.service
      .search()
      .then(profesionales => {
        this.setState({ ...this.state, profesionales: profesionales });
        this.filterPro = profesionales;
      })
      .catch(err => err);
  }

  handleChange = e => {
    const { name, value } = e.target;
    let filtro = this.filterPro.filter(item => {
      return item.typePro === e.target.value;
    });
    this.setState({ [name]: value, profesionales: filtro });
  };

  render() {
    return (
      <div className="general">
        <h1 className="title">Localiza a nuestros profesionales</h1>
        <div className="map">
          <Maps userInSession={this.state.user} />
        </div>
        <h2>¿Qué tipo de profesional buscas?</h2>
        <form action="submit">
          <select name="typePro" onChange={e => this.handleChange(e)}>
            <option>Elige profesion</option>
            <option value="fontanero">Fontanero</option>
            <option value="electricista">Electricista</option>
            <option value="carpintero">Carpintero</option>
            <option value="cristalero">Cristalero</option>
            <option value="albañil">Albañil</option>
          </select>
        </form>

        <div className="container">
          {this.state.profesionales.map(profesional => (
            <div className="cadaPro">
              <div>
                <p className="title">{profesional.empresa}</p>

                <Link to="/works/presupuesto" trabajador={profesional._id}>
                  Contactar con la empresa
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
