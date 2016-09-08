import React from 'react';

import './../Widget.css';

const ImageWidget = ({widget}) => {
  return (
    <div className="Widget">
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <a href={widget.data.image} rel="noopener noreferrer" target="_blank">
        <img src={widget.data.image} alt="" />
      </a>
    </div>
  );
};

export default ImageWidget;
