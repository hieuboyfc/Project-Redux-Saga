import {
  call,
  delay,
  fork,
  put,
  select,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import * as actionTasks from '../actions/task';
import { addTask, getListTask } from '../apis/task';
import { STATUSES, STATUS_CODE } from '../constants';
import * as taskTypes from '../constants/task';
import * as loading from './../actions/loading';
import { hideModal } from '../actions/modal';

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

function* addTaskSaga({ payload }) {
  yield put(loading.showLoading());
  const addNewData = payload.data;
  addNewData.status = STATUSES[0].value;
  const resp = yield call(addTask, addNewData);
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(actionTasks.addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(actionTasks.addTaskFailed(data));
  }
  yield delay(500);
  yield put(loading.hideLoading());
}

function* taskSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
}

export default taskSaga;
