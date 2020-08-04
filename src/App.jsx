import React from 'react';
import './App.css';
import FunctionalComponent from './function/FunctionalComponent';
import RotateGivenComponent from './rotategiven/RotateGivenComponent';
import ClassComponent from './class/ClassComponent';
import InteractiveComponent from './interactive/InteractiveComponent';
import Count from './count/Count';

const HOC = RotateGivenComponent(FunctionalComponent);

function App(props) {
  return (
    <div className="App">
        <ClassComponent store={props.store} message="A Functional component" />
        <FunctionalComponent />
        <br />
        <br />
        <br />
        <ClassComponent store={props.store} message="A higer order component" />
        <br/>
        <HOC/>
        <br/>
        <br />
        <br />
        <ClassComponent store={props.store} message="An interactive class component" />
        <InteractiveComponent />
        <br />
        <br />
        <br />
        <ClassComponent store={props.store} message="A functional component implemented with hook" />
        <Count />
    </div>
  );
}

export default App;
