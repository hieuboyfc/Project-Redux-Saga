export const API_ENDPOINT = 'http://localhost:3000';

export const STATUSES = [
  {
    value: 0,
    label: 'SẴN SÀNG',
  },
  {
    value: 1,
    label: 'ĐANG XỬ LÝ',
  },
  {
    value: 2,
    label: 'ĐÃ HOÀN THÀNH',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const MESSAGE = {
  ADD_SUCCESS: 'Thêm mới dữ liệu thành công!',
  UPDATE_SUCCESS: 'Cập nhật dữ liệu thành công!',
  DELETE_SUCCESS: 'Xóa dữ liệu thành công!',
};
