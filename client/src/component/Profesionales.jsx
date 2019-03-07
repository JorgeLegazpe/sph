import React, { Component } from "react";
import "./Profesionales.css";
import Service from "./auth/Service";
import { Link } from "react-router-dom";
import Maps from "./Maps";

export default class Profesionales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      profesionales: [],
      typePro: "",
      relaciones: []
    };
    this.service = new Service();
    this.search();
    this.filterPro = "";
    // this.idPro = "";
    // this.idUser = "";
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  createRelation(props) {
    const idPro = props;
    const idUser = this.props.userInSession._id;
    console.log(this.props.userInSession._id);
    this.service
      .createRelation({ idPro, idUser })
      .then(relation => {
        console.log("Enviado");
      })
      .catch(err => err);
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
        <h1 className="titleGeneral">Localiza a nuestros profesionales</h1>
        <div className="map">
          <Maps
            userInSession={this.props.userInSession}
            filterProfesionals={this.state.profesionales}
          />
        </div>
        <h2 className="titleGeneral">¿Qué tipo de profesional buscas?</h2>
        <form action="submit" className="titleGeneral">
          <select name="typePro" onChange={e => this.handleChange(e)}>
            <option>Elige profesión</option>
            <option value="fontanero">Fontanero</option>
            <option value="electricista">Electricista</option>
            <option value="carpintero">Carpintero</option>
            <option value="cristalero">Cristalero</option>
            <option value="albañil">Albañil</option>
            <option value="pintor">Pintor</option>
          </select>
        </form>

        <div className="container">
          {this.state.profesionales.map(profesional => (
            <div className="cadaPro">
              <div>
                <p className="title">{profesional.empresa}</p>
                <p className="direction">{profesional.ubication}</p>
                <button
                  type="button"
                  className="linkChat"
                  onClick={e => {
                    this.createRelation(profesional._id);
                  }}
                >
                  Contactar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
