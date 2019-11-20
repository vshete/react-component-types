import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { create } from "react-test-renderer";
import FunctionalComponent from './function/FunctionalComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Functional component", () => {
  test("should have only square class if nothing is passed in props", () => {
    const comp = create(<FunctionalComponent/>);
    expect(comp.toJSON().props.className).toBe('square undefined');
  });

  test("should have square and any given classes if they are passed in props", () => {
    const comp = create(<FunctionalComponent className="classOne classTwo"/>);
    expect(comp.toJSON().props.className).toBe('square classOne classTwo');
  });
});
