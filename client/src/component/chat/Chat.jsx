import React, { Component } from "react";
import io from "socket.io-client";
import "./Chat.css";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, messages: [], input: "" };
  }

  componentDidMount() {
    this.socket = io("http://localhost:5000");

    this.socket.on("message", msg => {
      console.log(msg);
      this.receiveMessage(msg.msg);
    });
  }

  receiveMessage(msg) {
    this.setState({
      input: "",
      messages: [...this.state.messages, { msg, type: "Él:" }]
    });
  }

  submitChat() {
    let msg = this.state.input;
    this.setState(
      {
        input: "",
        messages: [...this.state.messages, { msg, type: "Yo:" }]
      },
      () => this.socket.emit("message", { msg, timestamp: Date.now() })
    );
  }

  render() {
    console.log(this.props.idUser);
    let { messages, input } = this.state;
    return (
      <div
        className="chatRoom"
        onKeyDown={e => (e.keyCode == 13 ? this.submitChat() : null)}
      >
        <h1 className="titleChat">Chat de SPH</h1>
        <div className="messages">
          {messages.map((e, i) => (
            <div className={e.type} key={i}>
              {e.type}
              <div className="wrap">{e.msg}</div>
            </div>
          ))}
        </div>
        <input
          className="input"
          value={input}
          onChange={e => this.setState({ input: e.currentTarget.value })}
        />
      </div>
    );
  }
}
