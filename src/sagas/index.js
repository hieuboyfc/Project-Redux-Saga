import { fork } from 'redux-saga/effects';
import taskSaga from './task';

function* rootSaga() {
  yield fork(taskSaga);
}

export default rootSaga;
