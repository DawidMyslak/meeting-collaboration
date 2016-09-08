import React from 'react';

const ImageWidget = ({widget}) => {
  return (
    <div className="Widget">
      <h1>{widget.title}</h1>
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <a href={widget.data.source} rel="noopener noreferrer" target="_blank">
        <img src={widget.data.source} alt="" />
      </a>
    </div>
  );
};

export default ImageWidget;
