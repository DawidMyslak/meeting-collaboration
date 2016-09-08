const meeting = (state = {
  title: 'Sprint review',
  room: 'Games Room',
  date: '9th September 2016',
  time: '10:00'
}, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default meeting;
