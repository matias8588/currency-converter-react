import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>Money Converter</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
