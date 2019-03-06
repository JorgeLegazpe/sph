import React, { Component } from "react";
import "./Perfiluser.css";
import Service from "../auth/Service";

export default class Perfiluser extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new Service();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  //(willmount)
  //willmount=()=>{
  //  this.service.loggedin()
  //  .then(userlogueado)
  //   lo guardas en el state
  //}
  render() {
    console.log(this.props);
    return (
      <div className="perfiluser">
        <div className="edit">
          <h2>Datos Perfil</h2>
          <p>
            Nombre: <span>{this.props.userInSession.name}</span>
          </p>
          <p>
            Email: <span>{this.props.userInSession.email}</span>
          </p>
          <p>
            Teléfono: <span>{this.props.userInSession.phone}</span>
          </p>
          <p>
            Ubicación: <span>{this.props.userInSession.ubication}</span>
          </p>
          <button className="boton">Editar perfil</button>
        </div>
        <div className="edit">
          <h2>Presupuestos solicitados</h2>
        </div>
      </div>
    );
  }
}
