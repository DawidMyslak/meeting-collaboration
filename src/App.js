import React from 'react';

import HeaderWidget from './widgets/HeaderWidget';
import TodoWidget from './widgets/TodoWidget';
import NoteWidget from './widgets/NoteWidget';
import PollWidget from './widgets/PollWidget';
import TaskWidget from './widgets/TaskWidget';
import ResourceWidget from './widgets/ResourceWidget';
import ImageWidget from './widgets/ImageWidget';
import WhiteboardWidget from './widgets/WhiteboardWidget';
import EmptyWidget from './widgets/EmptyWidget';

import { addHeaderWidget, addTodoWidget, addNoteWidget,
  addPollWidget, addTaskWidget, addResourceWidget,
  addImageWidget, addWhiteboardWidget } from './actions';

import './App.css';

const App = ({store}) => {
  let state = store.getState();

  let users = state.users.map(user => {
    let style = ('App-users-user color-').concat(user.id);
    return <div key={user.id} className={style}><i className="fa fa-user"></i></div>;
  });

  let timeline = state.timeline.map(widget => {
    switch (widget.widget) {
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
          <h3><i className="fa fa-users"></i> {state.meeting.title}</h3>
        </div>
        <div className="App-meeting-info col-50">
          <h3><i className="fa fa-calendar"></i> {state.meeting.date}, {state.meeting.time}</h3>
          <h4><i className="fa fa-map-marker"></i> {state.meeting.room}</h4>
        </div>
      </div>
      <div className="App-utils container">
        <div className="App-widgets col-50">
          <ul>
            <li><i className="fa fa-header" onClick={() => store.dispatch(addHeaderWidget()) }></i></li>
            <li><i className="fa fa-check" onClick={() => store.dispatch(addTodoWidget()) }></i></li>
            <li><i className="fa fa-comment" onClick={() => store.dispatch(addNoteWidget()) }></i></li>
            <li><i className="fa fa-question" onClick={() => store.dispatch(addPollWidget()) }></i></li>
            <li><i className="fa fa-clock-o" onClick={() => store.dispatch(addTaskWidget()) }></i></li>
            <li><i className="fa fa-link" onClick={() => store.dispatch(addResourceWidget()) }></i></li>
            <li><i className="fa fa-picture-o" onClick={() => store.dispatch(addImageWidget()) }></i></li>
            <li><i className="fa fa-pencil" onClick={() => store.dispatch(addWhiteboardWidget()) }></i></li>
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

export default App;
