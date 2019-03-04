import React, { Component } from "react";
import Service from "./Service";
import "./SignupUser.css";
import { Redirect, Link } from "react-router-dom";

export default class SignupUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      phone: "",
      ubication: "",
      redirect: false
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
        this.setState({
          email: "",
          password: "",
          name: "",
          phone: "",
          ubication: "",
          redirect: true
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="containerSignup">
          <div className="signup">
            <h1>Crea tu cuenta en SPH</h1>
            <form action="submit" onSubmit={e => this.handleSubmit(e)}>
              <div>
                <input
                  type="text"
                  className="inputSignup"
                  value={this.state.email}
                  name="email"
                  placeholder="Email"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div>
                <input
                  type="password"
                  className="inputSignup"
                  value={this.state.password}
                  name="password"
                  placeholder="Password"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="inputSignup"
                  value={this.state.name}
                  name="name"
                  placeholder="Persona de contacto"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div>
                <input
                  type="number"
                  className="inputSignup"
                  value={this.state.phone}
                  name="phone"
                  placeholder="Teléfono"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="inputSignup"
                  value={this.state.ubication}
                  name="ubication"
                  placeholder="Ubicación"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <input className="botonEnviar" value="Registrar" type="submit" />
            </form>

            <div>
              <p>
                ¿Ya tienes cuenta? Haz
                <Link className="link" to={"/login"}>
                  {" "}
                  login
                </Link>
              </p>
            </div>
            <div>
              <button className="botonHome">
                <Link className="linkHome" to="/">
                  Volver a la Home
                </Link>
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
