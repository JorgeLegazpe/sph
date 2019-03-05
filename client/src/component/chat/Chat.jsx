import React, { Component } from "react";
import "./Chat.css";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
  }

  render() {
    console.log(this.props.idUser);
    return (
      <div>
        <p>Estás dentro del Chat</p>
      </div>
    );
  }
}
