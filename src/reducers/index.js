import { combineReducers } from 'redux';
import listing from './listing';
import table from './table';

const appReducers = combineReducers({
  listing,
  table
});

export default appReducers;
