import {
  call,
  delay,
  fork,
  put,
  take,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { hideModal } from '../actions/modal';
import * as actionTasks from '../actions/task';
import { addTask, getListTask, updateTask, deleteTask } from '../apis/task';
import { STATUSES, STATUS_CODE } from '../constants';
import * as taskTypes from '../constants/task';
import * as loading from './../actions/loading';

function* watchFetchListTaskAction() {
  while (true) {
    const action = yield take(taskTypes.FETCH_TASK);
    yield put(loading.showLoading());
    const { params } = action.payload;
    const resp = yield call(getListTask, params);
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
  yield put(actionTasks.fetchListTask({ q: keyword }));
}

function* addTaskSaga({ payload }) {
  yield put(loading.showLoading());
  const dataNew = payload.data;
  dataNew.status = STATUSES[0].value;
  const resp = yield call(addTask, dataNew);
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

function* updateTaskSaga({ payload }) {
  const { data } = payload;
  const taskEditting = yield select(state => state.task.taskEditting);
  yield put(loading.showLoading());
  const resp = yield call(updateTask, data, taskEditting.id);
  const { data: dataNew, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(actionTasks.updateTaskSuccess(dataNew));
    yield put(hideModal());
  } else {
    yield put(actionTasks.updateTaskFailed(dataNew));
  }
  yield delay(500);
  yield put(loading.hideLoading());
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(loading.showLoading());
  const resp = yield call(deleteTask, id);
  const { data, status } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(actionTasks.deleteTaskSuccess(id));
    yield put(hideModal());
  } else {
    yield put(actionTasks.deleteTaskFailed(data));
  }
  yield delay(500);
  yield put(loading.hideLoading());
}

function* taskSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
}

export default taskSaga;
