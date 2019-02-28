import React, { Component } from "react";
import Service from "./Service";
import "./SignupPro.css";
import { Link } from "react-router-dom";

export default class SignupUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      phone: "",
      ubication: ""
    };
    this.service = new Service();
    this.user = {};
  }

  handleSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const name = this.state.name;
    const phone = this.state.phone;
    const ubication = this.state.ubication;

    this.service
      .signup({ email, password, name, phone, ubication })
      .then(user => {
        debugger;
        this.setState({
          email: "",
          password: "",
          name: "",
          phone: "",
          ubication: ""
        });

        // this.props.getUser(response)
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log({ [name]: value });
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
            <label for="password">Password</label>
            <input
              type="password"
              value={this.state.password}
              name="password"
              onChange={e => this.handleChange(e)}
            />
            <label for="name">Nombre</label>
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={e => this.handleChange(e)}
            />
            <label for="phone">Teléfono</label>
            <input
              type="number"
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
            <input type="submit" />
          </form>
        </div>
        <button>
          ¿Ya tienes cuenta?
          <Link to={"/login"}> Login</Link>
        </button>
        <button>
          <Link to="/">Volver a la Home</Link>
        </button>
      </div>
    );
  }
}
