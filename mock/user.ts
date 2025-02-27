import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const permistionRole = {
  data: [
    {
      id: 58,
      name: 'CJ5-RM',
      status: 1,
      description: 'CJ5-RM',
      permissions: [
        {
          id: 128,
          name: 'CJ5-UPLOAD_FILE_COMMENT-DELETE',
          status: 1,
          description: 'Xóa phản hồi trên CMS (mục hồ sơ)',
        },
        {
          id: 129,
          name: 'CJ5-UPLOAD_FILE_COMMENT-HISTORY',
          status: 1,
          description: 'Lịch sử phản hồi trên CMS (mục hồ sơ)',
        },
        {
          id: 130,
          name: 'CJ5-UPLOAD_FILE_STATUS-SAVE',
          status: 1,
          description: 'Cập nhật trạng thái hồ sơ Thiếu/Đủ',
        },
        {
          id: 116,
          name: 'CJ5-LOAN_APPLICATION-PRE_ZIP_FILE',
          status: 1,
          description: 'Download zip file của hồ sơ vay trên CMS',
        },
        {
          id: 117,
          name: 'CJ5-LOAN_APPLICATION-SEARCH',
          status: 1,
          description: 'Tìm kiếm hồ sơ vay trên CMS',
        },
        { id: 118, name: 'CJ5-LOAN_APPLICATION-CLOSE', status: 1, description: 'Đóng hồ sơ vay' },
        {
          id: 119,
          name: 'CJ5-LOAN_APPLICATION-EXPORT',
          status: 1,
          description: 'Xuất ra file excel danh sách hồ sơ vay',
        },
        {
          id: 120,
          name: 'CJ5-LOAN_APPLICATION-DETAIL',
          status: 1,
          description: 'Xem chi tiết hồ sơ vay',
        },
        {
          id: 121,
          name: 'CJ5-LOAN_APPLICATION-EXPORT_PROPOSAL_LETTER',
          status: 1,
          description: 'Xuất tờ trình',
        },
        {
          id: 122,
          name: 'CJ5-LOAN_APPLICATION_COMMENT-SAVE',
          status: 1,
          description: 'Tạo phản hồi trên CMS',
        },
        {
          id: 123,
          name: 'CJ5-LOAN_APPLICATION_COMMENT-UPDATE',
          status: 1,
          description: 'Cập nhật phản hồi trên CMS',
        },
        {
          id: 124,
          name: 'CJ5-LOAN_APPLICATION_COMMENT-DELETE',
          status: 1,
          description: 'Xóa phản hồi trên CMS',
        },
        {
          id: 125,
          name: 'CJ5-LOAN_APPLICATION_COMMENT-HISTORY',
          status: 1,
          description: 'Lịch sử phản hồi trên CMS',
        },
        {
          id: 126,
          name: 'CJ5-UPLOAD_FILE_COMMENT-SAVE',
          status: 1,
          description: 'Tạo phản hồi trên CMS (mục hồ sơ)',
        },
        {
          id: 127,
          name: 'CJ5-UPLOAD_FILE_COMMENT-UPDATE',
          status: 1,
          description: 'Cập nhật phản hồi trên CMS (mục hồ sơ)',
        },
      ],
    },
    { id: 59, name: 'CJ5-ADMIN', status: 1, description: 'CJ5-ADMIN', permissions: [] },
    { id: 60, name: 'CJ5-BM', status: 1, description: 'CJ5-BM', permissions: [] },
  ],
  status: 200,
};

async function getFakeCaptcha(req: Request, res: Response) {
  await waitTime(2000);
  return res.json('captcha-xxx');
}

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;

/**
 * current user access， if is '', user need login
 */
let access = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'dev' ? 'admin' : '';

const getAccess = () => {
  return access;
};

export default {
  'GET /api/currentUser': (req: Request, res: Response) => {
    res.send({
      success: true,
      data: {
        fullName: 'PhongNV',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        signature: 'Phongnv',
        title: 'Director',
        group: 'UED',
        tags: [],
        role: 'ADMIN',
        notifyCount: 12,
        unreadCount: 11,
        country: 'China',
        access: getAccess(),
        geographic: {
          province: {
            label: 'Nam Tu Liem',
            key: '330000',
          },
          city: {
            label: 'Ha Noi',
            key: '330100',
          },
        },
        address: 'Ha noi',
        phone: '0752-268888888',
      },
    });
  },
  // GET POST 可省略
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/login/account': async (req: Request, res: Response) => {
    const { password, username, type } = req.body;
    await waitTime(2000);
    if (password === 'ant.design' && username === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      access = 'admin';
      return;
    }
    if (password === 'ant.design' && username === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      access = 'user';
      return;
    }
    if (type === 'mobile') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      access = 'admin';
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
    access = 'guest';
  },
  'POST /api/login/outLogin': (req: Request, res: Response) => {
    access = '';
    res.send({ data: {}, success: true });
  },
  'POST /api/register': (req: Request, res: Response) => {
    res.send({ status: 'ok', currentAuthority: 'user', success: true });
  },
  'GET /api/500': (req: Request, res: Response) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req: Request, res: Response) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req: Request, res: Response) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Forbidden',
      message: 'Forbidden',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req: Request, res: Response) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },

  'GET  /api/login/captcha': getFakeCaptcha,
};
