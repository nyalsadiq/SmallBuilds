import React, { Component } from 'react';
import './App.css';
import Card from './Card';

const style = {
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}

class App extends Component {
  render() {
    return (
      <div className="App" style={style}>
        <Card time="10" caseName="Excel service" assignee="Nyal" estimate="3"/>
        <Card time="10" caseName="Docs service" assignee="Jon" estimate="30"/>
        <Card time="2" caseName="Unimportant case" assignee="Nyal" estimate="1"/>
      </div>
    );
  }
}

export default App;
