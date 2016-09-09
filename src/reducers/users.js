const users = (state = [], action) => {
  switch (action.type) {
    case 'REFRESH_USERS':
      return action.users;
    default:
      return state;
  }
}

export default users;
