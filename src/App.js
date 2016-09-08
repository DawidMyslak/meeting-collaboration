import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TestWidget1 = (props) => {
  return (
    <tr>
      <td>{props.widget.id}</td>
      <td>{props.widget.type}</td>
      <td>{props.widget.title}</td>
    </tr>
  );
};

const TestWidget2 = (props) => {
  return (
    <tr>
      <td>{props.widget.id}</td>
      <td>{props.widget.type}</td>
      <td>{props.widget.title}</td>
    </tr>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      timeline: [
        {
          id: 1,
          title: 'Title1',
          type: 'TestWidget1',
          data: {
          }
        },
        {
          id: 2,
          title: 'Title2',
          type: 'TestWidget2',
          data: {
          }
        }
      ]
    };
  }

  render() {
    let timeline = this.state.timeline.map(widget => {
      switch (widget.type) {
        case 'TestWidget1':
          return <TestWidget1 key={widget.id} widget={widget} />;
        case 'TestWidget2':
          return <TestWidget2 key={widget.id} widget={widget} />;
        default:
          return '';
      }
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <table>
          <tbody>
            {timeline}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
