import { combineReducers } from 'redux';
import listing from './listing';
import table from './table';
import message from './message';
import blog from './blog';

const appReducers = combineReducers({
  listing,
  table,
  message,
  blog
});

export default appReducers;
