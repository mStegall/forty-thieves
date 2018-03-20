import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Card from "./components/card";
import CardStack from "./components/cardStack";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardStack>
          <Card suite="heart" number="2" />
          <Card suite="heart" number="5" />
          <Card suite="heart" number="7" />
          <Card suite="heart" number="9" />
          <Card suite="heart" number="A" />
        </CardStack>
      </div>
    );
  }
}

export default App;
