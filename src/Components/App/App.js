import React, { Component } from 'react';
import NavBar from '../Navbar/Navbar';
import Converter from '../Converter/Converter';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Converter />
      </div>
    )
  }
}
