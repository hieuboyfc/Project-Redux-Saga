import { combineReducers } from 'redux';
import task from '../reducers/Task';
import ui from '../reducers/UI';

const rootReducers = combineReducers({ task, ui });

export default rootReducers;
