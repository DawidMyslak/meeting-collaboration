const timeline = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      return state.concat({
        id: action.id,
        widget: action.widget,
        data: action.data
      });
    case 'TOGGLE_TODO':
      return state.map(widget => {
        if (widget.id !== action.widgetId) {
          return widget;
        }

        let todos = widget.data.todos.map(todo => {
          if (todo.id !== action.todoId) {
            return todo;
          }
          return Object.assign({}, todo, { completed: !todo.completed });
        });

        return Object.assign({}, widget, { data: { todos: todos } });
      });
    default:
      return state;
  }
}

export default timeline;
