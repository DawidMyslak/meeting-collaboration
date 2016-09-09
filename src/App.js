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

const App = ({store, socket}) => {
  let state = store.getState();

  const getCommand = () => {
    return ('').concat(document.getElementById('command').value);
  };

  const clearCommand = () => {
    document.getElementById('command').value = '';
  };

  const createHeaderWidget = () => {
    if (getCommand()) {
      socket.emit('ADD_WIDGET', addHeaderWidget(getCommand()));
      clearCommand();
    }
  };
  const createTodoWidget = () => {
    if (getCommand()) {
      socket.emit('ADD_WIDGET', addTodoWidget(getCommand()));
      clearCommand();
    }
  };
  const createNoteWidget = () => {
    if (getCommand()) {
      socket.emit('ADD_WIDGET', addNoteWidget(getCommand()));
      clearCommand();
    }
  };
  const createPollWidget = () => {
    if (getCommand()) {
      socket.emit('ADD_WIDGET', addPollWidget(getCommand()));
      clearCommand();
    }
  };
  const createTaskWidget = () => {
    if (getCommand()) {
      socket.emit('ADD_WIDGET', addTaskWidget(getCommand()));
      clearCommand();
    }
  };
  const createResourceWidget = () => {
    if (getCommand()) {
      socket.emit('ADD_WIDGET', addResourceWidget(getCommand()));
      clearCommand();
    }
  };
  const createImageWidget = () => {
    if (getCommand()) {
      socket.emit('ADD_WIDGET', addImageWidget(getCommand()));
      clearCommand();
    }
  };
  const createWhiteboardWidget = () => {
    socket.emit('ADD_WIDGET', addWhiteboardWidget());
    clearCommand();
  };

  let users = state.users.map((user, i) => {
    let style = ('App-users-user color-').concat(i + 1);
    return <div key={user.id} className={style}><i className="fa fa-user"></i></div>;
  });

  let timeline = state.timeline.map(widget => {
    switch (widget.widget) {
      case 'HeaderWidget':
        return (
          <div key={widget.id}>
            <div className="col-10"></div>
            <div className="App-widget col-90">
              <HeaderWidget socket={socket} widget={widget} />
            </div>
          </div>);
      case 'TodoWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-check"></i></div>
            </div>
            <div className="App-widget col-90">
              <TodoWidget socket={socket} widget={widget} />
            </div>
          </div>);
      case 'NoteWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-comment"></i></div>
            </div>
            <div className="App-widget col-90">
              <NoteWidget socket={socket} widget={widget} />
            </div>
          </div>);
      case 'PollWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-question"></i></div>
            </div>
            <div className="App-widget col-90">
              <PollWidget socket={socket} widget={widget} />
            </div>
          </div>);
      case 'TaskWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-clock-o"></i></div>
            </div>
            <div className="App-widget col-90">
              <TaskWidget socket={socket} widget={widget} />
            </div>
          </div>);
      case 'ResourceWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-link"></i></div>
            </div>
            <div className="App-widget col-90">
              <ResourceWidget socket={socket} widget={widget} />
            </div>
          </div>);
      case 'ImageWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-picture-o"></i></div>
            </div>
            <div className="App-widget col-90">
              <ImageWidget socket={socket} widget={widget} />
            </div>
          </div>);
      case 'WhiteboardWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-pencil"></i></div>
            </div>
            <div className="App-widget col-90">
              <WhiteboardWidget socket={socket} widget={widget} />
            </div>
          </div>);
      default:
        return '';
    }
  });

  let timelineBegin;
  if (state.timeline.length > 0) {
    timelineBegin = (
      <div className="App-timeline-begin">
        <div className="col-10">
          <div className="App-widget-begin"></div>
        </div>
        <div className="App-widget col-90">
          <EmptyWidget />
        </div>
      </div>
    );
  }

  let timelineEnd;
  if (state.timeline.length > 0) {
    timelineEnd = (
      <div>
        <div className="col-10">
          <div className="App-widget-end"></div>
        </div>
        <div className="App-widget col-90">
          <EmptyWidget />
        </div>
      </div>
    );
  }

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
        <div className="App-widgets col-70">
          <ul>
            <li><i className="fa fa-header" onClick={() => createHeaderWidget() }></i></li>
            <li><i className="fa fa-check" onClick={() => createTodoWidget() }></i></li>
            <li><i className="fa fa-comment" onClick={() => createNoteWidget() }></i></li>
            <li><i className="fa fa-question" onClick={() => createPollWidget() }></i></li>
            <li><i className="fa fa-clock-o" onClick={() => createTaskWidget() }></i></li>
            <li><i className="fa fa-link" onClick={() => createResourceWidget() }></i></li>
            <li><i className="fa fa-picture-o" onClick={() => createImageWidget() }></i></li>
            <li><i className="fa fa-pencil" onClick={() => createWhiteboardWidget() }></i></li>
          </ul>
        </div>
        <div className="App-users col-30">
          {users}
        </div>
      </div>
      <div className="App-command container">
        <div className="App-command-wrapper">
          <input id="command" type="text" placeholder="Command" />
        </div>
      </div>
      <div className="App-timeline container">
        {timelineBegin}
        {timeline}
        {timelineEnd}
      </div>
    </div>
  );
}

export default App;
