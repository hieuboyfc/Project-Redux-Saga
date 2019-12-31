import { combineReducers } from 'redux';
import task from '../reducers/task';
import loading from '../reducers/loading';
import modal from '../reducers/modal';

const rootReducers = combineReducers({
  task,
  loading,
  modal,
});

export default rootReducers;
