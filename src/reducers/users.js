const users = (state = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Paul'
  },
  {
    id: 3,
    name: 'Ringo'
  },
  {
    id: 4,
    name: 'George'
  },
  {
    id: 5,
    name: 'Yoko'
  }
], action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default users;
