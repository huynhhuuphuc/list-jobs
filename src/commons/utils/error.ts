import { notification } from 'antd';
import { ERRORS_CODE_MAP } from '../constants/apiMessages';
import { setHideLoading } from '../store';

/**
 * @Description
 * Error handler common
 */
const errorHandler = function (
  error: any,
  arrayMessageMap?: any,
  defaultMessage?: any,
  additionMessage?: any,
) {
  const messageMap = arrayMessageMap ? { ...ERRORS_CODE_MAP, ...arrayMessageMap } : ERRORS_CODE_MAP;
  setHideLoading();
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx

    if (error.response.status >= 500) {
      notification.error({
        message: messageMap[500],
      });
    } else {
      const errors = error?.data?.errors;
      let message;
      if (errors?.length) {
        message = messageMap[errors[0].code] || defaultMessage;
      } else {
        message = messageMap[error.response.status] || defaultMessage;
      }
      message = additionMessage ? message + additionMessage : message;
      if (message) {
        notification.error({
          message: message,
        });
      }
    }
  } else {
    notification.error({
      message: messageMap[500],
    });
  }

  throw error; // If throw. The error will continue to be thrown.
};

export { errorHandler };
