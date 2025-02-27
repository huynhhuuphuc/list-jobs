import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Địa chỉ không tồn tại!"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Quay lại trang trủ
      </Button>
    }
  />
);

export default NoFoundPage;
