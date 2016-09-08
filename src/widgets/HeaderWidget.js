import React from 'react';

const HeaderWidget = ({widget}) => {
  return (
    <div className="Widget">
      <h1>{widget.title}</h1>
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
    </div>
  );
};

export default HeaderWidget;