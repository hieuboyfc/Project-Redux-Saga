import { combineReducers } from 'redux';
import task from '../reducers/task';
import globalLoading from '../reducers/globalLoading';
import modal from '../reducers/modal';

const rootReducers = combineReducers({
  task,
  globalLoading,
  modal,
});

export default rootReducers;
