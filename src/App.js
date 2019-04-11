import React, { Component } from 'react';
import Routes from "./routes";

import './styles.css'

import Header from './components/Header';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
