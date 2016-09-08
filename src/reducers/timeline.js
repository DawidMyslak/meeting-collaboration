const timeline = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      return state.concat({
        id: action.id,
        widget: action.widget,
        data: action.data
      });
    default:
      return state;
  }
}

export default timeline;
