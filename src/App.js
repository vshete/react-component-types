import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './function/FunctionalComponent';
import RotateGivenComponent from './rotategiven/RotateGivenComponent';
import ClassComponent from './class/ClassComponent';

const HOC = RotateGivenComponent(FunctionalComponent);

function App() {
  return (
    <div className="App">
        <ClassComponent message="A Functional component" />
        <FunctionalComponent />
        <br />
        <br />
        <br />
        <ClassComponent message="A higer order component" />
        <br/>
        <HOC/>
    </div>
  );
}

export default App;
