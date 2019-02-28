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
      type: ""
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
          type: ""
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
      <div className="App">
        <div>
          <form action="submit" onSubmit={e => this.handleSubmit(e)}>
            <label for="email">Email</label>
            <input
              type="text"
              value={this.state.email}
              name="email"
              onChange={e => this.handleChange(e)}
            />
            <label for="empresa">Empresa</label>
            <input
              type="text"
              value={this.state.empresa}
              name="empresa"
              onChange={e => this.handleChange(e)}
            />
            <label for="usuario">Persona de contacto</label>
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={e => this.handleChange(e)}
            />
            <label for="password">Password</label>
            <input
              type="text"
              value={this.state.password}
              name="password"
              onChange={e => this.handleChange(e)}
            />
            <label for="phone">Teléfono</label>
            <input
              type="text"
              value={this.state.phone}
              name="phone"
              onChange={e => this.handleChange(e)}
            />
            <label for="ubication">Ubicación</label>
            <input
              type="text"
              value={this.state.ubication}
              name="ubication"
              onChange={e => this.handleChange(e)}
            />
            <label for="type">Tipo de profesión</label>
            <select onChange={e => this.handleChange(e)}>
              <option value="fontanero">Fontanero</option>
              <option value="electricista">Electricista</option>
              <option value="carpintero">Carpintero</option>
              <option value="cristalero">Cristalero</option>
              <option value="albañil">Albañil</option>
            </select>
            <input type="submit" />
          </form>
        </div>
        <button>
          <Link to="/">Volver a la Home</Link>
        </button>
      </div>
    );
  }
}
