import React, { Component } from "react";
import Header from "./components/Header";
import DataFile from "./components/DataFile";
import ListDataFile from "./components/ListDataFile";
import AddTask from "./components/AddTask";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DataFile />
        <ListDataFile />
        <AddTask />
      </div>
    );
  }
}

export default App;
