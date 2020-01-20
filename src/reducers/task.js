import * as toastHelper from './../commons/toastify';
import * as taskConstants from '../constants/task';

const initialState = {
  listTask: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskConstants.FETCH_TASK_FAILED: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstants.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskConstants.ADD_TASK: {
      const { data } = action.payload;
      return {
        ...state,
        data,
      };
    }
    case taskConstants.ADD_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: [data].concat(state.listTask),
      };
    }
    case taskConstants.ADD_TASK_FAILED: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
