import qs from 'query-string';
import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

// http://localhost:3000/task

const url = 'tasks';

// GET
export const getListTask = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

// POST
export const addTask = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

// PUT
export const updateTask = (data, taskId) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data);
};

// DELETE
export const deleteTask = taskId => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${taskId}`);
};
