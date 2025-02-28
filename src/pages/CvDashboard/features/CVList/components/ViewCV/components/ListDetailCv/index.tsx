import { showTotal } from '@/commons/utils/i18n';
import { useEffect, useMemo } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Row, Col, Popover, Button, Space, Select, Tooltip, Tag } from 'antd';
import Search from 'antd/lib/input/Search';
import { useRef, useState } from 'react';
import {
  CandidateNameActions,
  FormattedMessage,
  useDispatch,
  useHistory,
  useIntl,
  useSelector,
} from 'umi';
import { getDetailCv } from '@/pages/CvDashboard/services';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';

type UserManagerProps = {
  id?: number;
  full_name?: string;
  email?: string;
  phone?: string;
  branch_code?: string;
  branch_name?: string;
  leader?: string;
  updated_at?: string;
  updated_by?: string;
};

type HomeTableUserRequest = {
  key_word: string;
  empl_id: string;
  email: string;
  status: any;
  branch_code: string;
  full_name: string;
  phone: string;
  role: string;
  leader_email: string;
};

type ListDetailCVProps = {
  entity1?: any;
};

export default function ListDetailCV({ entity1 }: ListDetailCVProps) {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();
  const history = useHistory();
  const [content, setContent] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await getDetailCv(entity1?.uuid);
      console.log(data);
      setContent(data?.data?.contents);
    };
    if (entity1?.uuid) {
      getData();
    }
    return () => {};
  }, [entity1?.uuid]);

  const viewDetail = (entity: any) => {
    if (entity) {
      dispatch({
        type: CandidateNameActions.SAVE_CANDIDATE_NAME,
        payload: entity,
      });
      history.push(`/candidateName/detail/${entity?.full_name}`);
    }
  };

  const columns = useMemo<ProColumns<UserManagerProps>[]>(() => {
    return [
      {
        title: <FormattedMessage id="page.detail.table.id" defaultMessage="ID" />,
        dataIndex: 'id',
      },
      {
        title: <FormattedMessage id="page.detail.table.full_name" defaultMessage="Tên ứng viên" />,
        dataIndex: 'full_name',
        ellipsis: true,
      },
      {
        title: <FormattedMessage id="page.detail.table.phone" defaultMessage="Số điện thoại" />,
        dataIndex: 'phone',
      },
      {
        title: <FormattedMessage id="page.detail.table.email" defaultMessage="Email" />,
        dataIndex: 'email',
      },
      {
        title: <FormattedMessage id="page.detail.table.experience" defaultMessage="Kinh nghiệm" />,
        dataIndex: 'experience',
        // render: (_, entity) => (
        //   <Tooltip
        //     placement="top"

        //   >
        //     <InfoCircleOutlined />
        //   </Tooltip>
        // ),
        render: (_, entity: any) => {
          const result = entity.experiences;
          const sumYear = result.reduce(
            (acc: any, item: any) => acc + (item.end_year - item.start_year),
            0,
          );

          const nameCompany = result.map(
            (item: any) => `${item.name} (${item.end_year - item.start_year} năm)`,
          );

          const nameCompanyNewLine =
            nameCompany.length > 1 ? nameCompany.join('\n') : nameCompany.join(', ');
          return (
            <Space>
              {sumYear} năm
              <Tooltip title={nameCompanyNewLine} overlayInnerStyle={{ whiteSpace: 'pre-line' }}>
                <InfoCircleOutlined style={{ color: 'blue' }} />
              </Tooltip>
            </Space>
          );
        },
      },
      {
        title: <FormattedMessage id="page.detail.table.status" defaultMessage="Trạng thái" />,
        dataIndex: 'status',
        render: (_, entity: any) => {
          return (
            <Tag color={entity?.status === 'Phù hợp' ? 'green' : 'red'}>
              {entity?.status === 'Phù hợp' ? 'Phù hợp' : 'Chưa phù hợp'}
            </Tag>
          );
        },
      },
      {
        title: (
          <FormattedMessage
            id="page.detail.table.interviewTime"
            defaultMessage="Thời gian phỏng vấn"
          />
        ),
        dataIndex: 'interview_time',
      },
      {
        title: <FormattedMessage id="page.detail.table.createdAt" defaultMessage="Thời gian tạo" />,
        dataIndex: 'created_at',
      },
      {
        title: <FormattedMessage id="page.detail.table.action" defaultMessage="Hành động" />,
        dataIndex: 'action',
        render: (_, entity) => (
          <Space>
            <Button type="primary" onClick={() => viewDetail(entity)}>
              <FormattedMessage id="page.detail.table.view" defaultMessage="Xem chi tiết" />
            </Button>
            <Button type="default" danger>
              <FormattedMessage id="page.detail.table.delete" defaultMessage="Xóa" />
            </Button>
          </Space>
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

  const [columnsStateConfig] = useState<any>(() => {
    const objColumn: Record<string, any> = {};
    columns.forEach((item) => {
      if (item?.dataIndex) {
        objColumn[item?.dataIndex.toString()] = {};
        const element = objColumn[item?.dataIndex.toString()];
        element.show = true;
        element.label = item.title;
        if (item?.dataIndex == 'id' || item?.dataIndex == 'full_name') {
          element.fixed = 'left';
        }
        if (item?.dataIndex == 'action') {
          element.fixed = 'right';
        }
      }
    });
    return objColumn;
  });

  return (
    <>
      <PageContainer
        extra={[
          <Row key="search-row" justify="end" gutter={16}>
            <Col>
              <Search enterButton="Tìm kiếm" placeholder="Nhập Họ tên/SĐT" style={{ width: 325 }} />
            </Col>
            <Col>
              <Select
                placeholder="Trạng thái"
                style={{ width: 120 }}
                allowClear
                options={[
                  {
                    value: '1',
                    label: 'Phù hợp',
                  },
                  {
                    value: '2',
                    label: 'Chưa phù hợp',
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
        <ProTable<UserManagerProps, HomeTableUserRequest>
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
          rowKey="id"
          search={false}
          toolBarRender={() => []}
          dataSource={content}
          columns={columns}
          rowClassName="pointer"
          columnsState={{
            value: columnsStateConfig,
          }}
        />
      </PageContainer>
    </>
  );
}
