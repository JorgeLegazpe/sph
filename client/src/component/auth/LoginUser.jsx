import React, { Component } from "react";
import "./LoginUser.css";
import { Redirect, Link } from "react-router-dom";
import Service from "./Service";

export default class LoginUser extends Component {
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
    e.preventDefault();
    const { email, password, rol } = this.state;
    console.log(this.state.email + " Usuario que se logea");

    this.service.login(email, password, rol).then(user => {
      this.setState({ ...this.state, redirect: true });
      this.props.change(user);
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="containerLogin">
          <div className="login">
            <h1>Accede a tu cuenta</h1>
            <form action="submit" onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="text"
                  className="inputLogin"
                  name="email"
                  id=""
                  placeholder="Introduce tu email"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  className="inputLogin"
                  id=""
                  placeholder="Password"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <input className="botonEnviar" type="submit" />
            </form>
            <div>
              <p>
                Si no tienes cuenta regístrate
                <Link className="link" to="/auth/signupUser">
                  {" "}
                  aquí.
                </Link>
              </p>
            </div>
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
}
