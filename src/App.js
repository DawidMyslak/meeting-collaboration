import React, { Component } from 'react';

import TodoWidget from './widgets/TodoWidget'
import NoteWidget from './widgets/NoteWidget'
import PollWidget from './widgets/PollWidget'
import TaskWidget from './widgets/TaskWidget'
import ResourceWidget from './widgets/ResourceWidget'
import ImageWidget from './widgets/ImageWidget'

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
            text: '~~markdown~~ _is_ **awesome**\n' +
            '* one\n' +
            '* two\n' +
            '* three\n'
          }
        },
        {
          id: 3,
          title: 'Voting time!',
          type: 'PollWidget',
          data: {
            question: 'Best player in the world?',
            results: false,
            options: [
              {
                id: 1,
                text: 'Leo',
                votes: 2
              },
              {
                id: 2,
                text: 'Cris',
                votes: 4
              },
              {
                id: 3,
                text: 'Robert',
                votes: 1
              }
            ]
          }
        },
        {
          id: 4,
          title: 'Voting is finished!',
          type: 'PollWidget',
          data: {
            question: 'Best player in the world?',
            results: true,
            options: [
              {
                id: 1,
                text: 'Leo',
                votes: 2
              },
              {
                id: 2,
                text: 'Cris',
                votes: 4
              },
              {
                id: 3,
                text: 'Robert',
                votes: 1
              }
            ]
          }
        },
        {
          id: 5,
          title: 'Doing something new and cool :-)',
          type: 'TaskWidget',
          data: {
            task: 'Bulding meeting minutes taker app',
            results: false,
            estimates: [3, 5, 8]
          }
        },
        {
          id: 6,
          title: 'Sharing resources',
          type: 'ResourceWidget',
          data: {
            name: 'Check this great website!',
            link: 'https://www.teamwork.com'
          }
        },
        {
          id: 7,
          title: 'Sharing images',
          type: 'ImageWidget',
          data: {
            source: 'https://www.teamwork.com/images/favicon-large.png'
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
        case 'PollWidget':
          return <PollWidget key={widget.id} widget={widget} />;
        case 'TaskWidget':
          return <TaskWidget key={widget.id} widget={widget} />;
        case 'ResourceWidget':
          return <ResourceWidget key={widget.id} widget={widget} />;
        case 'ImageWidget':
          return <ImageWidget key={widget.id} widget={widget} />;
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
