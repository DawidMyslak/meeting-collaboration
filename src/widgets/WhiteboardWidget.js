import React from 'react';

const WhiteboardWidget = ({widget}) => {
  let source = 'data:image/png;' + widget.data.source;
  return (
    <div className="Widget">
      <h1>{widget.title}</h1>
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <img src={source} alt="" />
    </div>
  );
};

export default WhiteboardWidget;
