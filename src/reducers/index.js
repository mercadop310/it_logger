import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

// Takes an Object with all of the reducers. our state will be called "log"
export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
