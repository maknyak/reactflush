import React, { Component } from 'react';
import NavBar from '../components/nav/NavBar/NavBar';
import HomePage from "./HomePage";
import FooterNav from "../components/nav/FooterNav/FooterNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
          <NavBar/>
          <div className="header-caption">
            <h2 className="header-slogan">Extending Vision Beyond Imagination</h2>
            <button className="btn btn-outline-light rounded-pill px-4">Explorer More</button>
          </div>
        </header>

        <HomePage/>
        <FooterNav/>
      </div>
    )
  }
}

export default App;
