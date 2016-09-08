import React, { Component } from 'react';

import HeaderWidget from './widgets/HeaderWidget'
import TodoWidget from './widgets/TodoWidget'
import NoteWidget from './widgets/NoteWidget'
import PollWidget from './widgets/PollWidget'
import TaskWidget from './widgets/TaskWidget'
import ResourceWidget from './widgets/ResourceWidget'
import ImageWidget from './widgets/ImageWidget'
import WhiteboardWidget from './widgets/WhiteboardWidget'
import EmptyWidget from './widgets/EmptyWidget'

import './App.css';

const onTest = (param) => console.log(param);

class App extends Component {
  constructor() {
    super();

    this.state = {
      meeting: {
        title: 'Sprint review',
        room: 'Games Room',
        date: '9th September 2016',
        time: '10:00'
      },
      people: [
        {
          id: 1,
          name: 'John'
        },
        {
          id: 2,
          name: 'Paul'
        },
        {
          id: 3,
          name: 'Ringo'
        },
        {
          id: 4,
          name: 'George'
        },
        {
          id: 5,
          name: 'Yoko'
        }
      ],
      timeline: [
        {
          id: -1,
          type: 'HeaderWidget',
          data: {
            title: 'Agenda'
          }
        },
        {
          id: 1,
          type: 'TodoWidget',
          data: {
            todos: [
              {
                id: 1,
                todo: 'Sprint retro',
                completed: true
              },
              {
                id: 2,
                todo: 'Brainstorm',
                completed: false
              },
              {
                id: 3,
                todo: 'Sprint planning',
                completed: false
              }
            ]
          }
        },
        {
          id: 2,
          type: 'NoteWidget',
          data: {
            note: '~~markdown~~ _is_ **awesome**\n' +
            '* one\n' +
            '* two\n' +
            '* three\n'
          }
        },
        {
          id: 3,
          type: 'PollWidget',
          data: {
            question: 'Best player in the world?',
            results: false,
            answers: [
              {
                id: 1,
                answer: 'Leo',
                votes: 2
              },
              {
                id: 2,
                answer: 'Cris',
                votes: 4
              },
              {
                id: 3,
                answer: 'Robert',
                votes: 1
              }
            ]
          }
        },
        {
          id: 4,
          type: 'PollWidget',
          data: {
            question: 'Best player in the world?',
            results: true,
            answers: [
              {
                id: 1,
                answer: 'Leo',
                votes: 2
              },
              {
                id: 2,
                answer: 'Cris',
                votes: 4
              },
              {
                id: 3,
                answer: 'Robert',
                votes: 1
              }
            ]
          }
        },
        {
          id: -2,
          type: 'HeaderWidget',
          data: {
            title: 'Unreaaaal appp!!'
          }
        },
        {
          id: 5,
          type: 'TaskWidget',
          data: {
            task: 'Bulding meeting minutes taker app',
            results: false,
            estimates: [3, 5, 8]
          }
        },
        {
          id: 6,
          type: 'TaskWidget',
          data: {
            task: 'Bulding meeting minutes taker app',
            results: true,
            estimates: [3, 5, 8]
          }
        },
        {
          id: 7,
          type: 'ResourceWidget',
          data: {
            description: 'Check this great website!',
            link: 'https://www.teamwork.com'
          }
        },
        {
          id: 8,
          type: 'ImageWidget',
          data: {
            image: 'https://www.teamwork.com/images/favicon-large.png'
          }
        },
        {
          id: 9,
          type: 'HeaderWidget',
          data: {
            title: 'Awesomeee header'
          }
        },
        {
          id: 10,
          type: 'WhiteboardWidget',
          data: {
            source: 'base64,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'
          }
        }
      ]
    };
  }

  render() {
    let users = this.state.people.map(person => {
      let style = ('App-users-user color-').concat(person.id);
      return <div key={person.id} className={style}><i className="fa fa-user"></i></div>;
    });

    let timeline = this.state.timeline.map(widget => {
      switch (widget.type) {
        case 'HeaderWidget':
          return (
            <div key={widget.id}>
              <div className="col-10"></div>
              <div className="App-widget col-90">
                <HeaderWidget widget={widget} />
              </div>
            </div>);
        case 'TodoWidget':
          return (
            <div key={widget.id}>
              <div className="col-10">
                <div className="App-widget-checkpoint"><i className="fa fa-check"></i></div>
              </div>
              <div className="App-widget col-90">
                <TodoWidget widget={widget} />
              </div>
            </div>);
        case 'NoteWidget':
          return (
            <div key={widget.id}>
              <div className="col-10">
                <div className="App-widget-checkpoint"><i className="fa fa-comment"></i></div>
              </div>
              <div className="App-widget col-90">
                <NoteWidget widget={widget} />
              </div>
            </div>);
        case 'PollWidget':
          return (
            <div key={widget.id}>
              <div className="col-10">
                <div className="App-widget-checkpoint"><i className="fa fa-question"></i></div>
              </div>
              <div className="App-widget col-90">
                <PollWidget widget={widget} />
              </div>
            </div>);
        case 'TaskWidget':
          return (
            <div key={widget.id}>
              <div className="col-10">
                <div className="App-widget-checkpoint"><i className="fa fa-clock-o"></i></div>
              </div>
              <div className="App-widget col-90">
                <TaskWidget widget={widget} />
              </div>
            </div>);
        case 'ResourceWidget':
          return (
            <div key={widget.id}>
              <div className="col-10">
                <div className="App-widget-checkpoint"><i className="fa fa-link"></i></div>
              </div>
              <div className="App-widget col-90">
                <ResourceWidget widget={widget} />
              </div>
            </div>);
        case 'ImageWidget':
          return (
            <div key={widget.id}>
              <div className="col-10">
                <div className="App-widget-checkpoint"><i className="fa fa-picture-o"></i></div>
              </div>
              <div className="App-widget col-90">
                <ImageWidget widget={widget} />
              </div>
            </div>);
        case 'WhiteboardWidget':
          return (
            <div key={widget.id}>
              <div className="col-10">
                <div className="App-widget-checkpoint"><i className="fa fa-pencil"></i></div>
              </div>
              <div className="App-widget col-90">
                <WhiteboardWidget widget={widget} />
              </div>
            </div>);
        default:
          return '';
      }
    });

    return (
      <div className="App">
        <div className="App-navbar container">
          <div className="App-meeting-title col-50">
            <h2>Meeting collaboration</h2>
            <h3><i className="fa fa-users"></i> {this.state.meeting.title}</h3>
          </div>
          <div className="App-meeting-info col-50">
            <h3><i className="fa fa-calendar"></i> {this.state.meeting.date}, {this.state.meeting.time}</h3>
            <h4><i className="fa fa-map-marker"></i> {this.state.meeting.room}</h4>
          </div>
        </div>
        <div className="App-utils container">
          <div className="App-widgets col-50">
            <ul>
              <li><i className="fa fa-header" onClick={() => onTest(1) }></i></li>
              <li><i className="fa fa-check"></i></li>
              <li><i className="fa fa-comment"></i></li>
              <li><i className="fa fa-question"></i></li>
              <li><i className="fa fa-clock-o"></i></li>
              <li><i className="fa fa-link"></i></li>
              <li><i className="fa fa-picture-o"></i></li>
              <li><i className="fa fa-pencil"></i></li>
            </ul>
          </div>
          <div className="App-users col-50">
            {users}
          </div>
        </div>
        <div className="App-timeline container">
          <div className="App-timeline-begin">
            <div className="col-10">
              <div className="App-widget-begin"></div>
            </div>
            <div className="App-widget col-90">
              <EmptyWidget />
            </div>
          </div>
          {timeline}
          <div>
            <div className="col-10">
              <div className="App-widget-end"></div>
            </div>
            <div className="App-widget col-90">
              <EmptyWidget />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
