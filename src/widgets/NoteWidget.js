import React from 'react';
import marked from 'marked';

import './../Widget.css';

const NoteWidget = ({widget}) => {
  let html = marked(widget.data.note || '');

  return (
    <div className="Widget NoteWidget">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default NoteWidget;
