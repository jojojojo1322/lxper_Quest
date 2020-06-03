import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
