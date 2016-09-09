import React from 'react';

import { toggleTask } from './../actions';
import { voteTask } from './../actions';

import './../Widget.css';

const TaskWidget = ({store, widget}) => {
  let options = [0, 1, 2, 3, 5, 8, 20, 40];
  options = options.map(option => {
    if (!widget.data.results) {
      return (<li
        key={option}
        onClick={() => store.dispatch(voteTask(widget.id, option)) }
        >
        {option}
      </li>);
    }
    else {
      return (<li key={option}>
        {option}
      </li>);
    }
  });

  let results;
  if (!widget.data.results) {
    results = (<div>
      <p>Votes: {widget.data.estimates.length}</p>
      <p><button onClick={() => store.dispatch(toggleTask(widget.id)) }>Show results</button></p>
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
      <p>Estimates: {estimates}</p>
      <p><button onClick={() => store.dispatch(toggleTask(widget.id)) }>Hide results</button></p>
    </div>);
  }

  return (
    <div className="Widget">
      <p><strong>{widget.data.task}</strong></p>
      <ul>
        {options}
      </ul>
      {results}
    </div>
  );
};

export default TaskWidget;
