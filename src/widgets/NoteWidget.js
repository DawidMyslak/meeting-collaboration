import React from 'react';
import marked from 'marked';

const NoteWidget = ({widget}) => {
  let html = marked(widget.data.text || '');

  return (
    <div className="Widget">
      <h1>{widget.title}</h1>
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default NoteWidget;
