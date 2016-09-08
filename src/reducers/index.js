import { combineReducers } from 'redux';
import meeting from './meeting';
import users from './users';
import timeline from './timeline';

const reducer = combineReducers({
  meeting,
  users,
  timeline
});

export default reducer;
