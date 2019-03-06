import React, { Component } from "react";
import "./Perfilpro.css";
import Service from "../auth/Service";

export default class Perfilpro extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new Service();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  render() {
    console.log(this.props);
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
          <div>
            <h2>Presupuestos recibidos</h2>
          </div>
        </div>
      </div>
    );
  }
}
