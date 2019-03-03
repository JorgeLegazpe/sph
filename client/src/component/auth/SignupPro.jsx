import React, { Component } from "react";
import "./SignupPro.css";
import { Link } from "react-router-dom";
import Service from "./Service";

export default class SignupPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      empresa: "",
      name: "",
      password: "",
      phone: "",
      ubication: "",
      type: "",
      redirect: false
    };
    this.service = new Service();
    this.pro = {};
  }

  handleSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const empresa = this.state.empresa;
    const name = this.state.name;
    const password = this.state.password;
    const phone = this.state.phone;
    const ubication = this.state.ubication;
    const type = this.state.type;

    this.service
      .signupPro({ email, empresa, name, password, phone, ubication, type })
      .then(user => {
        this.setState({
          email: "",
          empresa: "",
          name: "",
          password: "",
          phone: "",
          ubication: "",
          type: "",
          redirect: true
        });

        // this.props.getUser(response)
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="containerSignup">
        <div className="signup">
          <h1>Regístrate y consigue más clientes</h1>
          <form action="submit" onSubmit={e => this.handleSubmit(e)}>
            <div>
              <input
                type="text"
                value={this.state.email}
                className="inputSignup"
                name="email"
                placeholder="Email"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <input
                type="text"
                value={this.state.empresa}
                className="inputSignup"
                name="empresa"
                placeholder="Nombre de empresa"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <input
                type="text"
                value={this.state.name}
                className="inputSignup"
                name="name"
                placeholder="Persona de contacto"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <input
                type="password"
                value={this.state.password}
                className="inputSignup"
                name="password"
                placeholder="Password"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <input
                type="text"
                value={this.state.phone}
                className="inputSignup"
                name="phone"
                placeholder="Teléfono"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <input
                type="text"
                value={this.state.ubication}
                className="inputSignup"
                name="ubication"
                placeholder="Ubicación"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="selectPro">
              <label for="typePro">Tipo de negocio:</label>
              <select name="typePro" onChange={e => this.handleChange(e)}>
                <option>Elige tu profesión</option>
                <option value="fontanero">Fontanero</option>
                <option value="electricista">Electricista</option>
                <option value="carpintero">Carpintero</option>
                <option value="cristalero">Cristalero</option>
                <option value="albañil">Albañil</option>
                <option value="pintor">Pintor</option>
              </select>
            </div>
            <div>
              <input className="botonEnviar" type="submit" />
            </div>
          </form>
          <button className="botonHome">
            <Link className="linkHome" to="/">
              Volver a la Home
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
