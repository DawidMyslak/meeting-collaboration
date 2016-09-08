import React from 'react';

const TodoWidget = ({widget}) => {
  let todos = widget.data.todos.map(todo => {
    return (<li
      key={todo.id}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      // onClick={onClick}
      >
      {todo.todo} [click]
    </li>);
  });

  return (
    <div className="Widget">
      <p>ID: {widget.id}</p>
      <p>Type: {widget.type}</p>
      <ul>
        {todos}
      </ul>
    </div>
  );
};

export default TodoWidget;
