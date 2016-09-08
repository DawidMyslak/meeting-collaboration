import React from 'react';

import './../Widget.css';

const ResourceWidget = ({widget}) => {
  return (
    <div className="Widget">
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <a href={widget.data.link} rel="noopener noreferrer" target="_blank">{widget.data.description}</a>
    </div>
  );
};

export default ResourceWidget;
