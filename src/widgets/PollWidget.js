import React from 'react';

const PollWidget = ({widget}) => {
  let options = widget.data.options.map(option => {
    if (!widget.data.finished) {
      return (<li key={option.id}>
        <button>
          {option.text}
        </button>
      </li>);
    }
    else {
      return (<li key={option.id}>
        {option.text} ({option.votes})
      </li>);
    }
  });

  let finish;
  if (!widget.data.finished) {
    finish = <p><button>Finish</button></p>
  }

  return (
    <div className="Widget">
      <h1>{widget.title}</h1>
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <p>{widget.data.question}</p>
      <ul>
        {options}
      </ul>
      {finish}
    </div>
  );
};

export default PollWidget;
