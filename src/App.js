import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TodoWidget = ({widget}) => {
  let todos = widget.data.todos.map(todo => {
    return <li
      key={todo.id}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
      {todo.text}
    </li>
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
                text: 'Sprint retro',
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
