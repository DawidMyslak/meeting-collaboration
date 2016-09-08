import React from 'react';

const TaskWidget = ({widget}) => {
  let options = [0, 0.5, 1, 2, 3, 5, 8, 20, 40, 100];
  options = options.map((option, i) => {
    if (!widget.data.results) {
      return (<li
        key={i}
        // onClick={onClick}
        >
        {option} [click]
      </li>);
    }
    else {
      return (<li key={i}>
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
      <h1>{widget.title}</h1>
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <p>{widget.data.task}</p>
      <ul>
        {options}
      </ul>
      {results}
    </div>
  );
};

export default TaskWidget;
