import React from 'react';

import { togglePoll } from './../actions';
import { votePoll } from './../actions';

import './../Widget.css';

const PollWidget = ({socket, widget}) => {
  let answers = widget.data.answers.map(answer => {
    if (!widget.data.results) {
      return (<li
        className="active"
        key={answer.id}
        onClick={() => socket.emit('UPDATE_WIDGET', votePoll(widget.id, answer.id)) }
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
    results = <p><button onClick={() => socket.emit('UPDATE_WIDGET', togglePoll(widget.id)) }>Show results</button></p>;
  }
  else {
    results = <p><button onClick={() => socket.emit('UPDATE_WIDGET', togglePoll(widget.id)) }>Hide results</button></p>;
  }

  return (
    <div className="Widget PollWidget">
      <p><strong>Select one option:</strong></p>
      <ul>
        {answers}
      </ul>
      {results}
    </div>
  );
};

export default PollWidget;
