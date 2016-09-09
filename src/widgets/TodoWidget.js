import React from 'react';

import { toggleTodo } from './../actions';

import './../Widget.css';

const TodoWidget = ({store, widget}) => {
  let todos = widget.data.todos.map(todo => {
    let icon;
    if (todo.completed) {
      icon = <i className="fa fa-check-circle-o"></i>;
    }
    else {
      icon = <i className="fa fa-circle-o"></i>;
    }
    
    return (<li
      key={todo.id}
      style={{ color: todo.completed ? '#999' : 'inherit' }}
      onClick={() => store.dispatch(toggleTodo(widget.id, todo.id)) }
      >
      {icon}{todo.todo}
    </li>);
  });

  return (
    <div className="Widget TodoWidget">
      <ul>
        {todos}
      </ul>
    </div>
  );
};

export default TodoWidget;
