import { combineReducers } from 'redux';
import task from '../reducers/task';
import ui from '../reducers/ui';

const rootReducers = combineReducers({ task, ui });

export default rootReducers;
