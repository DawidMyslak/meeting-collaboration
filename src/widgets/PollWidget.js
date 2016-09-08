import React from 'react';

const PollWidget = ({widget}) => {
  let options = widget.data.options.map(option => {
    if (!widget.data.results) {
      return (<li
        key={option.id}
        // onClick={onClick}
        >
        {option.text} [click]
      </li>);
    }
    else {
      return (<li key={option.id}>
        {option.text} ({option.votes})
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
      <h1>{widget.title}</h1>
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <p>{widget.data.question}</p>
      <ul>
        {options}
      </ul>
      {results}
    </div>
  );
};

export default PollWidget;
