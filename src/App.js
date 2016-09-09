import React from 'react';
import { animateScroll } from 'react-scroll';

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

  const createHeaderWidget = () => { store.dispatch(addHeaderWidget()); animateScroll.scrollToBottom(); };
  const createTodoWidget = () => { store.dispatch(addTodoWidget()); animateScroll.scrollToBottom(); };
  const createNoteWidget = () => { store.dispatch(addNoteWidget()); animateScroll.scrollToBottom(); };
  const createPollWidget = () => { store.dispatch(addPollWidget()); animateScroll.scrollToBottom(); };
  const createTaskWidget = () => { store.dispatch(addTaskWidget()); animateScroll.scrollToBottom(); };
  const createResourceWidget = () => { store.dispatch(addResourceWidget()); animateScroll.scrollToBottom(); };
  const createImageWidget = () => { store.dispatch(addImageWidget()); animateScroll.scrollToBottom(); };
  const createWhiteboardWidget = () => { store.dispatch(addWhiteboardWidget()); animateScroll.scrollToBottom(); };

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
              <HeaderWidget widget={widget} store={store} />
            </div>
          </div>);
      case 'TodoWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-check"></i></div>
            </div>
            <div className="App-widget col-90">
              <TodoWidget widget={widget} store={store} />
            </div>
          </div>);
      case 'NoteWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-comment"></i></div>
            </div>
            <div className="App-widget col-90">
              <NoteWidget widget={widget} store={store} />
            </div>
          </div>);
      case 'PollWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-question"></i></div>
            </div>
            <div className="App-widget col-90">
              <PollWidget widget={widget} store={store} />
            </div>
          </div>);
      case 'TaskWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-clock-o"></i></div>
            </div>
            <div className="App-widget col-90">
              <TaskWidget widget={widget} store={store} />
            </div>
          </div>);
      case 'ResourceWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-link"></i></div>
            </div>
            <div className="App-widget col-90">
              <ResourceWidget widget={widget} store={store} />
            </div>
          </div>);
      case 'ImageWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-picture-o"></i></div>
            </div>
            <div className="App-widget col-90">
              <ImageWidget widget={widget} store={store} />
            </div>
          </div>);
      case 'WhiteboardWidget':
        return (
          <div key={widget.id}>
            <div className="col-10">
              <div className="App-widget-checkpoint"><i className="fa fa-pencil"></i></div>
            </div>
            <div className="App-widget col-90">
              <WhiteboardWidget widget={widget} store={store} />
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
        <div className="App-widgets col-50">
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
        <div className="App-users col-50">
          {users}
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
