import React, { Component } from 'react';
import marked from 'marked';
import logo from './logo.svg';
import './App.css';

class MarkdownElement extends Component {
  constructor(props) {
    super(props);

    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }
  render() {
    const { text } = this.props,
      html = marked(text || '');

    return (<div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>);
  }
}

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
      <MarkdownElement text={widget.data.text} />
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
