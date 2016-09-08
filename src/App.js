import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TodoWidget = (props) => {
  return (
    <div>
      <p>{props.widget.id}</p>
      <p>{props.widget.type}</p>
      <p>{props.widget.title}</p>
    </div>
  );
};

const NoteWidget = (props) => {
  return (
    <div>
      <p>{props.widget.id}</p>
      <p>{props.widget.type}</p>
      <p>{props.widget.title}</p>
    </div>
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
          type: 'TodoWidget',
          data: {
          }
        },
        {
          id: 2,
          title: 'Title2',
          type: 'NoteWidget',
          data: {
          }
        }
      ]
    };
  }

  render() {
    let timeline = this.state.timeline.map(widget => {
      switch (widget.type) {
        case 'TodoWidget':
          return <TodoWidget key={widget.id} widget={widget} />;
        case 'NoteWidget':
          return <NoteWidget key={widget.id} widget={widget} />;
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
        <div>
          {timeline}
        </div>
      </div>
    );
  }
}

export default App;
