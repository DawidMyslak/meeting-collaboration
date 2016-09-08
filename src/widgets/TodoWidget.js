import React from 'react';

const TodoWidget = ({widget}) => {
  let todos = widget.data.todos.map(todo => {
    return (<li
      key={todo.id}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      // onClick={onClick}
      >
      {todo.text} [click]
    </li>);
  });

  return (
    <div className="Widget">
      <h1>{widget.title}</h1>
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <ul>
        {todos}
      </ul>
    </div>
  );
};

export default TodoWidget;