import { notification } from 'antd';

type NotifyType = 'error' | 'success' | 'waring';
const notifyService = (message: any, type: NotifyType = 'error') => {
  notification[type]({
    message,
  });
};

export { notifyService };
