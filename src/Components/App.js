import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header";
import "./style/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes />
          <Header />
        </Router>
      </div>
    );
  }
}

export default App;
