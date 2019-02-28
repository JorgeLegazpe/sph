import React, { Component } from "react";
import "./Perfiluser.css";
import { Link } from "react-router-dom";
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
      <div className="App">
        <p>{this.props.userInSession.name}</p>
      </div>
    );
  }
}
