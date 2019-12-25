import {
  call,
  fork,
  take,
  put,
  delay,
  takeLatest,
  select,
} from 'redux-saga/effects';
import { getListTask } from '../apis/task';
import * as taskTypes from '../constants/task';
import { STATUS_CODE } from '../constants';
import * as actionTasks from '../actions/task';
import * as loading from './../actions/ui';

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

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  const list = yield select(state => state.task.listTask);
  const filteredTask = list.filter(task =>
    task.title
      .trim()
      .toLowerCase()
      .includes(keyword.trim().toLowerCase()),
  );

  yield put(actionTasks.filterTaskSuccess(filteredTask));
}

function* taskSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}

export default taskSaga;
