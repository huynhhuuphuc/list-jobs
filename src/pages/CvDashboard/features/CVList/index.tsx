import { showTotal } from '@/commons/utils/i18n';
import { FormattedMessage, Link, useDispatch, useIntl } from 'umi';
import { Button, Card, Col, Popover, Row, Select, Space, Form, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ProTable, type ActionType, type ProColumns } from '@ant-design/pro-table';
import { useMemo, useRef, useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Search from 'antd/lib/input/Search';
import { ProFormDatePicker } from '@ant-design/pro-form';
import { dataTableJobList, getJobList } from '../../services/api';
import FormShowMore from './components/FormShowMore';
import AddJobModal from './components/AddJobModal';

type CVListProps = {
  uuid?: number;
  name?: string;
  status?: string;
  end_date?: string;
  quantity?: number;
  link?: string;
  created_by?: string;
  contents?: any[];
  experiences?: any[];
};

type HomeTableCVListRequest = {
  key_word: string;
  status: any;
  start_date: string;
  end_date: string;
  quantity: number;
  created_by: string;
};

const CVList: React.FC = () => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const [isAddJob, setIsAddJob] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean, entity: any) => {
    setOpen(true);
    dispatch({
      type: 'cvDashboard/setEntity',
      payload: entity,
    });
  };

  const columns = useMemo<ProColumns<CVListProps>[]>(() => {
    return [
      {
        title: <FormattedMessage id="page.cvList.id" defaultMessage="ID" />,
        dataIndex: 'uuid',
        ellipsis: true,
      },
      {
        title: <FormattedMessage id="page.cvList.name" defaultMessage="Tên công việc" />,
        dataIndex: 'name',
        render: (_, entity: any) => {
          return (
            <Link
              to={`/cv-dashboard/cv-dashboard-detail/${entity.uuid}`}
              style={{ color: '#1784fd' }}
            >
              {entity.name}
            </Link>
          );
        },
      },
      {
        title: <FormattedMessage id="page.cvList.status" defaultMessage="Trạng thái" />,
        dataIndex: 'status',
        render: (_, entity: any) => {
          const status = entity.status === 1 ? 'Còn hạn' : entity.status === 2 ? 'Hết hạn' : '';
          return <Tag color={entity.status === 1 ? 'green' : 'red'}>{status}</Tag>;
        },
      },
      {
        title: <FormattedMessage id="page.cvList.endDate" defaultMessage="Ngày hết hạn" />,
        dataIndex: 'end_date',
      },
      {
        title: <FormattedMessage id="page.cvList.quantity" defaultMessage="Số lượng CV" />,
        dataIndex: 'quantity',
      },
      {
        title: <FormattedMessage id="page.cvList.createdBy" defaultMessage="Thời gian tạo" />,
        dataIndex: 'created_by',
      },
      {
        title: <FormattedMessage id="page.userManager.table.edit" defaultMessage="Chỉnh sửa" />,
        dataIndex: 'edit',
        render: (_, entity) => (
          <>
            <Popover
              placement="bottomLeft"
              content={<FormShowMore entity={entity} hide={hide} />}
              trigger="click"
              // open={open}
              onOpenChange={() => handleOpenChange(open, entity)}
            >
              <Button type="text">...</Button>
            </Popover>
          </>
        ),
      },
    ];
  }, []);

  const reloadTable = () => {
    actionRef.current?.reload(true);
    if (actionRef.current?.clearSelected) {
      actionRef.current?.clearSelected();
    }
  };

  const handleAddJob = () => {
    setIsAddJob(true);
  };

  const handleCloseAddJob = () => {
    setIsAddJob(false);
  };

  const [columnsStateMap] = useState<any>(() => {
    const objColumn: Record<string, any> = {};
    columns.forEach((item) => {
      if (item?.dataIndex) {
        objColumn[item?.dataIndex.toString()] = {};
        const element = objColumn[item?.dataIndex.toString()];
        element.show = true;
        element.label = item.title;
        if (item?.dataIndex === 'uuid') {
          element.fixed = 'left';
        }
      }
    });
    return objColumn;
  });

  return (
    <>
      <div className="text-h4-medium d-flex justify-content-between align-items-center mb-32">
        <div>{intl.formatMessage({ id: 'page.cvList.title', defaultMessage: 'Jobs List' })}</div>
        <div>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAddJob}>
            {intl.formatMessage({ id: 'page.cvList.add', defaultMessage: 'Add' })}
          </Button>
        </div>
      </div>
      <Card>
        <PageContainer
          extra={[
            <Row key="search-row" justify="end" gutter={16}>
              <Col>
                <Search
                  enterButton="Tìm kiếm"
                  placeholder="Tìm kiếm tên công việc"
                  style={{ width: 325 }}
                />
              </Col>
              <Col>
                <Form>
                  <ProFormDatePicker width="sm" name="customerGroup" placeholder="Từ ngày" />
                </Form>
              </Col>
              <Col>
                <Select
                  placeholder="Trạng thái"
                  style={{ width: 120 }}
                  allowClear
                  options={[
                    {
                      value: '1',
                      label: 'Còn hạn',
                    },
                    {
                      value: '2',
                      label: 'Hết hạn',
                    },
                    {
                      value: '3',
                      label: 'Tất cả',
                    },
                  ]}
                />
              </Col>
            </Row>,
          ]}
        >
          <ProTable<CVListProps, HomeTableCVListRequest>
            sticky={{ offsetHeader: 60 }}
            tableAlertOptionRender={({ onCleanSelected }) => {
              return (
                <Space size={16}>
                  <a onClick={onCleanSelected}>Bỏ chọn</a>
                </Space>
              );
            }}
            scroll={{ x: 1600 }}
            options={{
              reload: reloadTable,
              setting: false,
            }}
            rowSelection={{}}
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              showTotal,
            }}
            actionRef={actionRef}
            request={(params) => {
              return dataTableJobList(params);
            }}
            rowKey="uuid"
            search={false}
            toolBarRender={() => []}
            columns={columns}
            rowClassName="pointer"
            columnsState={{
              value: columnsStateMap,
            }}
          />
        </PageContainer>
      </Card>
      <AddJobModal
        visible={isAddJob}
        onClose={handleCloseAddJob}
        title={intl.formatMessage({
          id: 'page.cvList.createNewJob',
          defaultMessage: 'Tạo mới công việc',
        })}
      />
    </>
  );
};

export default CVList;
