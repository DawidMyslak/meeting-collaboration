import React from 'react';

import './../Widget.css';

const WhiteboardWidget = ({widget}) => {
  let source = ('data:image/png;').concat(widget.data.source);
  return (
    <div className="Widget">
      <img src={source} alt="" />
    </div>
  );
};

export default WhiteboardWidget;
