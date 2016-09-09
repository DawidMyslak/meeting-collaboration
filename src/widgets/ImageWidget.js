import React from 'react';

import './../Widget.css';

const openImage = (image) => {
  window.open(image);
};

const ImageWidget = ({widget}) => {
  let style = {
    backgroundImage: 'url(' + widget.data.image + ')'
  };

  return (
    <div className="Widget ImageWidget" style={style} onClick={() => openImage(widget.data.image) }></div>
  );
};

export default ImageWidget;
