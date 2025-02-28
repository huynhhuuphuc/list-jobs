import { Button, Card, Descriptions, Space } from 'antd';
import React, { useState } from 'react';
import ListDetailCV from './components/ListDetailCv';
import { useIntl, useSelector } from 'umi';
import { PlusOutlined } from '@ant-design/icons';
import ModalAddCv from './components/ModalAddCv';

const ViewCV: React.FC = () => {
  const entity = useSelector((state: any) => state.cvDashboard.entity);
  const intl = useIntl();
  const [visibleAddCv, setVisibleAddCv] = useState(false);

  const handleAddCV = () => {
    setVisibleAddCv(true);
  };

  const handleCloseAddCv = () => {
    setVisibleAddCv(false);
  };

  return (
    <>
      <div className="text-h4-medium d-flex justify-content-between align-items-center mb-32">
        <div>{intl.formatMessage({ id: 'page.cvList.title', defaultMessage: 'Jobs List' })}</div>
        <div>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAddCV}>
            {intl.formatMessage({ id: 'page.cvDetail.table.add', defaultMessage: 'Thêm mới CV' })}
          </Button>
        </div>
      </div>
      <Card>
        <Descriptions
          column={2}
          title={<Space>{intl.formatMessage({ id: 'page.cvList.jobInfo' })}</Space>}
        >
          <Descriptions.Item
            label={intl.formatMessage({ id: 'page.cvList.jobName' })}
            labelStyle={{ color: '#8b8b8b', minWidth: '115px' }}
            contentStyle={{ color: '#212121', fontWeight: '500' }}
          >
            {entity.name}
          </Descriptions.Item>

          <Descriptions.Item
            label={intl.formatMessage({ id: 'page.cvList.expiredDate' })}
            labelStyle={{ color: '#8b8b8b', minWidth: '115px' }}
            contentStyle={{ color: '#212121', fontWeight: '500' }}
          >
            <Space
              className="d-flex align-items-center"
              style={{ width: '100%', justifyContent: 'space-between' }}
            >
              <div style={{ flex: 1, marginRight: 16 }}>{entity.end_date}</div>
            </Space>
          </Descriptions.Item>

          <Descriptions.Item
            label={intl.formatMessage({ id: 'page.cvList.code' })}
            labelStyle={{ color: '#8b8b8b', minWidth: '115px' }}
            contentStyle={{ color: '#212121', fontWeight: '500' }}
          >
            <Space
              className="d-flex align-items-center"
              style={{ width: '100%', justifyContent: 'space-between' }}
            >
              <div style={{ flex: 1, marginRight: 16 }}>{entity.uuid}</div>
            </Space>
          </Descriptions.Item>
          <Descriptions.Item
            label={intl.formatMessage({ id: 'page.cvList.status' })}
            labelStyle={{ color: '#8b8b8b', minWidth: '115px' }}
            contentStyle={{ color: '#212121', fontWeight: '500' }}
          >
            <Space
              className="d-flex align-items-center"
              style={{ width: '100%', justifyContent: 'space-between' }}
            >
              <div style={{ flex: 1, marginRight: 16 }}>{entity.status}</div>
            </Space>
          </Descriptions.Item>
          <Descriptions.Item
            label={intl.formatMessage({ id: 'page.cvList.createdByDate' })}
            labelStyle={{ color: '#8b8b8b', minWidth: '115px' }}
            contentStyle={{ color: '#212121', fontWeight: '500' }}
          >
            <Space
              className="d-flex align-items-center"
              style={{ width: '100%', justifyContent: 'space-between' }}
            >
              <div style={{ flex: 1, marginRight: 16 }}>{entity.created_by}</div>
            </Space>
          </Descriptions.Item>
          <Descriptions.Item
            label={intl.formatMessage({ id: 'page.cvList.jobInfo' })}
            labelStyle={{ color: '#8b8b8b', minWidth: '115px' }}
            contentStyle={{ color: '#212121', fontWeight: '500' }}
          >
            <Space
              className="d-flex align-items-center"
              style={{ width: '100%', justifyContent: 'space-between' }}
            >
              <a
                style={{ flex: 1, marginRight: 16 }}
                href={entity.link}
                target="_blank"
                rel="noreferrer"
              >
                {entity.link}
              </a>
            </Space>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Card title="Danh sách CV" style={{ marginTop: 32 }}>
        <ListDetailCV entity1={entity} />
      </Card>

      <ModalAddCv
        visible={visibleAddCv}
        onClose={handleCloseAddCv}
        title="TẢI LÊN CV CHO CÔNG VIỆC SALE GWS"
        outsideScreen={true}
      />
    </>
  );
};

export default ViewCV;
