import React from 'react';

import './../Widget.css';

const ResourceWidget = ({widget}) => {
  return (
    <div className="Widget">
      <a href={widget.data.link} rel="noopener noreferrer" target="_blank">{widget.data.description}</a>
    </div>
  );
};

export default ResourceWidget;
