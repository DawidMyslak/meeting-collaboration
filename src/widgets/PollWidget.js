import React from 'react';

import './../Widget.css';

const PollWidget = ({widget}) => {
  let answers = widget.data.answers.map(answer => {
    if (!widget.data.results) {
      return (<li
        key={answer.id}
        // onClick={onClick}
        >
        {answer.answer} [click]
      </li>);
    }
    else {
      return (<li key={answer.id}>
        {answer.answer} ({answer.votes})
      </li>);
    }
  });

  let results;
  if (!widget.data.results) {
    results = <p><button>Show results</button></p>;
  }
  else {
    results = <p><button>Hide results</button></p>;
  }

  return (
    <div className="Widget">
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <p>{widget.data.question}</p>
      <ul>
        {answers}
      </ul>
      {results}
    </div>
  );
};

export default PollWidget;
