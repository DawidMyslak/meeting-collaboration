import React from 'react';

import './../Widget.css';

const HeaderWidget = ({widget}) => {
  return (
    <div className="Widget">
      <h1>{widget.data.title}</h1>
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
    </div>
  );
};

export default HeaderWidget;
