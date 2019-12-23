import axiosService from '../../commons/AxiosService';
import { API_ENDPOINT } from '../../constants';

// http://localhost:3000/task

const url = '/tasks';

export const fetchListTask = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
