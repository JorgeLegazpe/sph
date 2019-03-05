import React, { Component } from "react";
import "./Presupuesto.css";
import Service from "./auth/Service";
import { NavLink, Link } from "react-router-dom";

export default class Presupuesto extends Component {}
//   constructor(props) {
//     super(props);
//     this.state = { loggedInUser: null };
//     this.state = { trabajador: null };
//     this.service = new Service();
//   }

//   componentWillReceiveProps(nextProps) {
//     console.log(nextProps);
//     this.setState({
//       ...this.state,
//       loggedInUser: nextProps["userInSessio"],
//       trabajador: nextProps["trabajador"]
//     });
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     const { email, password, rol } = this.state;
//     console.log(this.state.email + " Usuario que se logea");

//     // this.service.login(email, password, rol).then(user => {
//     //   this.setState({ ...this.state, redirect: true });

//     // });
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div>
//         <h1>De: {this.props.userInSession.name}</h1>
//         {/* <h1>Para: {this.state.trabajador.empresa}</h1> */}
//         <form action="submit" onSubmit={this.handleSubmit}>
//           <input
//             type="textarea"
//             name="presupuesto"
//             id=""
//             placeholder="Hola"
//             onChange={e => this.handleChange(e)}
//           />
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// }
