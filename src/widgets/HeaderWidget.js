import React from 'react';

import './../Widget.css';

const HeaderWidget = ({widget}) => {
  return (
    <div className="Widget">
      <h1>{widget.data.title}</h1>
    </div>
  );
};

export default HeaderWidget;
