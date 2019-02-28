import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import Navbar from "./Navbar";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div class="buscador">
            <Search />
          </div>
          <div class="border">
            <button>
              <Link to="/auth/loginPro">Login Pro</Link>
            </button>
            <button>
              <Link to="/auth/signupPro">Sign up Pro</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
