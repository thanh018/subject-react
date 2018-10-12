import { combineReducers } from 'redux';
import listing from './listing';
import table from './table';
import message from './message';

const appReducers = combineReducers({
  listing,
  table,
  message
});

export default appReducers;
