import React from 'react';

const WhiteboardWidget = ({widget}) => {
  let source = ('data:image/png;').concat(widget.data.source);
  return (
    <div className="Widget">
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <img src={source} alt="" />
    </div>
  );
};

export default WhiteboardWidget;
