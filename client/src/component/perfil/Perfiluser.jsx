import React, { Component } from "react";
import "./Perfiluser.css";
import Service from "../auth/Service";

export default class Perfiluser extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, presupuestos: [] };
    this.service = new Service();
    this.findRelationUser();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  findRelationUser() {
    this.service
      .findRelationUser(this.props.userInSession._id)
      .then(response => {
        this.setState({ ...this.state, presupuestos: response });
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
              Nombre:
              <input
                type="text"
                className="form-control"
                placeholder={this.props.userInSession.name}
              />
            </div>
            <div className="form-group col-md-6">
              Email:
              <input
                type="text"
                className="form-control"
                placeholder={this.props.userInSession.email}
              />
            </div>
            <div className="form-group col-md-6">
              Teléfono:
              <input
                type="number"
                className="form-control"
                placeholder={this.props.userInSession.phone}
              />
            </div>
            <div className="form-group col-md-6">
              Ubicación:{" "}
              <input
                type="text"
                className="form-control ancho"
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
                <p>Empresa: {presupuesto.profesional.empresa}</p>
                <p>Teléfono: {presupuesto.profesional.phone}</p>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
