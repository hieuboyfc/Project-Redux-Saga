import { toast } from 'react-toastify';

export const toastError = error => {
  let message = null;
  if (typeof error === 'object' && error.message) ({ message } = error);
  if (message !== null && typeof message !== 'undefined' && message !== '')
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
};

export const toastSuccess = message => {
  if (message !== null && typeof message !== 'undefined' && message !== '')
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
};
