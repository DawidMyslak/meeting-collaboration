import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TodoWidget = ({widget}) => {
  let todos = widget.data.todos.map(todo => {
    return (<li
      key={todo.id}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
      {todo.text}
    </li>);
  });

  return (
    <div className="Widget">
      <h1>{widget.title}</h1>
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <ul>
        {todos}
      </ul>
    </div>
  );
};

const NoteWidget = ({widget}) => {
  return (
    <div className="Widget">
      <h1>{widget.title}</h1>
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <p>{widget.data.text}</p>
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
          title: 'Title2',
          type: 'NoteWidget',
          data: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
