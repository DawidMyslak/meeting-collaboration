const users = (state = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Paul'
  }
], action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default users;
