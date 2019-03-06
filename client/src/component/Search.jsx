import React, { Component } from "react";
import "./Search.css";
import Service from "./auth/Service";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirect: false
    };
    this.service = new Service();
    this.user = {};
  }

  handleSubmit = e => {
    const { typePro } = this.state;
    this.service.search(typePro).then(user => {
      this.setState({ ...this.state, redirect: true });
      this.props.change(user);
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <p>¿Qué tipo de profresional buscas?</p>
        <form action="submit" onSubmit={this.handleSubmit}>
          <select name="typePro" onChange={e => this.handleChange(e)}>
            <option value="todos">Todas las profesiones</option>
            <option value="fontanero">Fontanero</option>
            <option value="electricista">Electricista</option>
            <option value="carpintero">Carpintero</option>
            <option value="cristalero">Cristalero</option>
            <option value="albañil">Albañil</option>
          </select>
          <input
            type="text"
            name="ubicacion"
            placeholder="Introduce tu ubicación"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
