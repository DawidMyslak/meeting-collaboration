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

        return Object.assign({}, widget, { data: Object.assign({}, widget.data, { todos: todos }) });
      });
    case 'TOGGLE_POLL':
      return state.map(widget => {
        if (widget.id !== action.widgetId) {
          return widget;
        }

        return Object.assign({}, widget, { data: Object.assign({}, widget.data, { results: !widget.data.results }) });
      });
    case 'VOTE_POLL':
      return state.map(widget => {
        if (widget.id !== action.widgetId) {
          return widget;
        }

        let answers = widget.data.answers.map(answer => {
          if (answer.id !== action.answerId) {
            return answer;
          }
          return Object.assign({}, answer, { votes: ++answer.votes });
        });

        return Object.assign({}, widget, { data: Object.assign({}, widget.data, { answers: answers }) });
      });
    case 'TOGGLE_TASK':
      return state.map(widget => {
        if (widget.id !== action.widgetId) {
          return widget;
        }

        return Object.assign({}, widget, { data: Object.assign({}, widget.data, { results: !widget.data.results }) });
      });
    case 'VOTE_TASK':
      return state.map(widget => {
        if (widget.id !== action.widgetId) {
          return widget;
        }

        return Object.assign({}, widget, { data: Object.assign({}, widget.data, { estimates: widget.data.estimates.concat(action.value) }) });
      });
    default:
      return state;
  }
}

export default timeline;
