import React from 'react';

import './../Widget.css';

const TaskWidget = ({widget}) => {
  let options = [0, 1, 2, 3, 5, 8, 20, 40];
  options = options.map(option => {
    if (!widget.data.results) {
      return (<li
        key={option}
        // onClick={onClick}
        >
        {option} [click]
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
      <p><button>Show results</button></p>
    </div>);
  }
  else {
    let estimates = Math.floor(widget.data.estimates.reduce((sum, n) => {
      return sum + n;
    }, 0) / widget.data.estimates.length);

    results = (<div>
      <p>Estimates: {estimates}</p>
      <p><button>Hide results</button></p>
    </div>);
  }

  return (
    <div className="Widget">
      <p>{widget.data.task}</p>
      <ul>
        {options}
      </ul>
      {results}
    </div>
  );
};

export default TaskWidget;
