import React, { Component } from "react";
import "./Perfilpro.css";
import Service from "../auth/Service";

export default class Perfilpro extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, presupuestos: [] };
    this.service = new Service();
    this.findRelationPro();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  findRelationPro() {
    this.service
      .findRelationPro(this.props.userInSession._id)
      .then(response => {
        this.setState({ ...this.state, presupuestos: response });
        console.log(response);
      })
      .catch(err => err);
  }

  render() {
    return (
      <div>
        <form className="editPerfil">
          <div className="form-row">
            <div className="form-group col-md-6">
              <h2>Datos Perfil</h2>
            </div>
            <div className="form-group col-md-6">
              Empresa:
              <input
                type="text"
                className="form-group"
                placeholder={this.props.userInSession.empresa}
              />
            </div>
            <div className="form-group col-md-6">
              Nombre:
              <input
                type="text"
                className="form-group"
                placeholder={this.props.userInSession.name}
              />
            </div>
            <div className="form-group col-md-6">
              Email:
              <input
                type="text"
                className="form-group"
                placeholder={this.props.userInSession.email}
              />
            </div>
            <div className="form-group col-md-6">
              Teléfono:
              <input
                type="number"
                className="form-group"
                placeholder={this.props.userInSession.phone}
              />
            </div>
            <div className="form-group col-md-6">
              Ubicación:
              <input
                type="text"
                className="form-group"
                placeholder={this.props.userInSession.ubication}
              />
            </div>
            <div className="form-group col-md-6 divBoton">
              <button className="boton">Editar perfil</button>
            </div>
          </div>
        </form>
        <div className="presupuestos">
          <h2>Presupuestos solicitados</h2>
          {this.state.presupuestos.map(presupuesto => (
            <div className="cadaPresu">
              <div>
                <p>Nombre: {presupuesto.user.name}</p>
                <p>Teléfono: {presupuesto.user.phone}</p>
                <p>Dirección: {presupuesto.user.ubication}</p>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
