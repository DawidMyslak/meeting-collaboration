import React, { Component } from 'react';
import TodoWidget from './widgets/TodoWidget'
import NoteWidget from './widgets/NoteWidget'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      timeline: [
        {
          id: 1,
          title: 'Agenda',
          type: 'TodoWidget',
          data: {
            todos: [
              {
                id: 1,
                text: 'Sprint retro',
                completed: true
              },
              {
                id: 2,
                text: 'Brainstorm',
                completed: false
              },
              {
                id: 3,
                text: 'Sprint planning',
                completed: false
              }
            ]
          }
        },
        {
          id: 2,
          title: 'Opinion',
          type: 'NoteWidget',
          data: {
            text: '~~markdown~~ _is_ **awesome**'
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
        <div>
          {timeline}
        </div>
      </div>
    );
  }
}

export default App;
