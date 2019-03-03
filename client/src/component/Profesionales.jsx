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
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  search() {
    this.service
      .search()
      .then(profesionales => {
        this.setState({ ...this.state, profesionales: profesionales });
      })
      .catch(err => console.log);
  }

  handleSubmit = e => {
    const { typePro } = this.state;
    console.log(this.state.typePro);
    // this.setState({ ...this.state });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="general">
        <h1 className="title">Localiza a nuestros profesionales</h1>
        <div className="map">
          <Maps userInSession={this.state.user} />
        </div>
        <h2>¿Qué tipo de profesional buscas?</h2>
        <form action="submit" onSubmit={this.handleSubmit()}>
          <select name="typePro" onChange={e => this.handleChange(e)}>
            <option>Elige profesion</option>
            <option value="fontanero">Fontanero</option>
            <option value="electricista">Electricista</option>
            <option value="carpintero">Carpintero</option>
            <option value="cristalero">Cristalero</option>
            <option value="albañil">Albañil</option>
          </select>
          <input type="submit" />
        </form>
        {this.state.profesionales.map(profesional => (
          <div className="container">
            {/* <NavLink
              style={{ textDecoration: "none", color: "black", margin: 0 }}
              className="item-2"
              to={`/perfilpro/${profesional._id}`}
              key={profesional._id}
            > */}
            <div className="cadaPro">
              <p className="title">{profesional.empresa}</p>

              <Link to="/works/presupuesto" trabajador={profesional._id}>
                Pedir presupuesto
              </Link>
            </div>
            {/* </NavLink> */}
          </div>
        ))}
      </div>
    );
  }
}
