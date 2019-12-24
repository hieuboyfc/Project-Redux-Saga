import * as taskApis from '../../apis/Task';
import * as taskConstants from '../../constants/Task';

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = error => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

// export const fetchListTaskRequest = () => {
//   return dispatch => {
//     dispatch(fetchListTask());
//     taskApis
//       .getListTask()
//       .then(resp => {
//         const { data } = resp;
//         dispatch(fetchListTaskSuccess(data));
//       })
//       .catch(error => {
//         dispatch(fetchListTaskFailed(error));
//       });
//   };
// };
