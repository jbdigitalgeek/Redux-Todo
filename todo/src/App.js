import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Jeremy's Round Tuits:</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
