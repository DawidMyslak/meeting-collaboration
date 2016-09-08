import React, { Component } from 'react';
import marked from 'marked';

const NoteWidget = ({widget}) => {
  return (
    <div className="Widget">
      <h1>{widget.title}</h1>
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <MarkdownElement text={widget.data.text} />
    </div>
  );
};

class MarkdownElement extends Component {
  constructor(props) {
    super(props);

    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }
  render() {
    const { text } = this.props,
      html = marked(text || '');

    return (<div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>);
  }
}

export default NoteWidget;
