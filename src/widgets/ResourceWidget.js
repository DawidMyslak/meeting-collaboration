import React from 'react';

import './../Widget.css';

const ResourceWidget = ({widget}) => {
  return (
    <div className="Widget ResourceWidget">
      <a href={widget.data.link} rel="noopener noreferrer" target="_blank">Open resource in the new window <i className="fa fa-external-link-square"></i></a>
    </div>
  );
};

export default ResourceWidget;
