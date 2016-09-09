import React from 'react';

import { toggleTask } from './../actions';
import { voteTask } from './../actions';

import './../Widget.css';

const TaskWidget = ({socket, widget}) => {
  let options = [0, 1, 2, 3, 5, 8, 20, 40];
  options = options.map(option => {
    if (!widget.data.results) {
      return (<li
        className="active"
        key={option}
        onClick={() => socket.emit('UPDATE_WIDGET', voteTask(widget.id, option)) }
        >
        {option}
      </li>);
    }
    else {
      return (<li className="inactive" key={option}>
        {option}
      </li>);
    }
  });

  let results;
  if (!widget.data.results) {
    results = (<div>
      <p><u>Votes: {widget.data.estimates.length}</u></p>
      <p><button onClick={() => socket.emit('UPDATE_WIDGET', toggleTask(widget.id)) }>Show results</button></p>
    </div>);
  }
  else {
    let estimates = widget.data.estimates.reduce((sum, n) => {
      return sum + n;
    }, 0);
    if (estimates !== 0) {
      estimates = Math.floor(estimates / widget.data.estimates.length);
    }

    results = (<div>
      <p><u>Estimates: {estimates}</u></p>
      <p><button onClick={() => socket.emit('UPDATE_WIDGET', toggleTask(widget.id)) }>Hide results</button></p>
    </div>);
  }

  return (
    <div className="Widget TaskWidget">
      <p><strong>{widget.data.task}</strong></p>
      <ul>
        {options}
      </ul>
      {results}
    </div>
  );
};

export default TaskWidget;
