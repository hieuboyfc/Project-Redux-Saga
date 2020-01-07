import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loading from '../reducers/loading';
import modal from '../reducers/modal';
import task from '../reducers/task';

const rootReducers = combineReducers({
  task,
  loading,
  modal,
  form: formReducer,
});

export default rootReducers;
