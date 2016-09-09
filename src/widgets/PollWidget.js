import React from 'react';

import { togglePoll } from './../actions';
import { votePoll } from './../actions';

import './../Widget.css';

const PollWidget = ({store, widget}) => {
  let answers = widget.data.answers.map(answer => {
    if (!widget.data.results) {
      return (<li
        className="active"
        key={answer.id}
        onClick={() => store.dispatch(votePoll(widget.id, answer.id)) }
        >
        {answer.answer}
      </li>);
    }
    else {
      return (<li className="inactive" key={answer.id}>
        {answer.answer} ({answer.votes})
      </li>);
    }
  });

  let results;
  if (!widget.data.results) {
    results = <p><button onClick={() => store.dispatch(togglePoll(widget.id)) }>Show results</button></p>;
  }
  else {
    results = <p><button onClick={() => store.dispatch(togglePoll(widget.id)) }>Hide results</button></p>;
  }

  return (
    <div className="Widget PollWidget">
      <p><strong>{widget.data.question}</strong></p>
      <ul>
        {answers}
      </ul>
      {results}
    </div>
  );
};

export default PollWidget;
