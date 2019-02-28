import React, { Component } from "react";
import "./LoginUser.css";
import { Link } from "react-router-dom";
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
    return (
      <div className="App">
        <form action="submit" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            id=""
            placeholder="Email"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="text"
            name="password"
            id=""
            placeholder="Password"
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
        <div>
          <p>
            Si no tienes cuenta regístrate
            <Link to="/auth/signupUser">aquí</Link>
          </p>
        </div>
        <button>
          <Link to="/">Volver a la Home</Link>
        </button>
      </div>
    );
  }
}
