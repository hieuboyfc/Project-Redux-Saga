import { call, fork, take, put, delay } from 'redux-saga/effects';
import { getListTask } from '../apis/Task';
import * as taskTypes from '../constants/Task';
import { STATUS_CODE } from '../constants';
import * as actionTasks from '../actions/Task';
import * as loading from './../actions/UI';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(loading.showLoading());
    const resp = yield call(getListTask);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS)
      yield put(actionTasks.fetchListTaskSuccess(data));
    else yield put(actionTasks.fetchListTaskFailed(data));
    yield delay(500);
    yield put(loading.hideLoading());
  }
}

function* watchCreateTaskAction() {
  yield console.log('2');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
