import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  FileOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { FormattedMessage, useDispatch, useHistory, useIntl } from 'umi';
import AddJobModal from '../AddJobModal';
import { useState } from 'react';
import ModalDetailAddCv from './components/AddCVModal';

const FormShowMore = ({ entity, hide }: { entity: any; hide?: any }) => {
  const intl = useIntl();
  const history = useHistory();
  const [isEditJob, setIsEditJob] = useState(false);
  const [isAddCV, setIsAddCV] = useState(false);
  const dispatch = useDispatch();

  const itemStyle = {
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    padding: '8px 12px',
    borderRadius: 5,
  };

  const handleEdit = () => {
    // console.log(entity);
    hide();
    setIsEditJob(true);
  };

  const handleCloseEditJob = () => {
    setIsEditJob(false);
    dispatch({
      type: 'cvDashboard/getJobList',
      payload: {
        uuid: entity.uuid,
      },
    });
    hide();
  };

  const handleViewCV = () => {
    history.push(`/cv-dashboard/detail/${entity.uuid}`);
    hide();
  };

  const handleUploadCV = () => {
    setIsAddCV(true);
    hide();
  };

  const handleCloseAddCV = () => {
    setIsAddCV(false);
    hide();
  };

  return (
    <div>
      <div
        style={itemStyle}
        onClick={handleEdit}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <EditOutlined />
        <span style={{ marginLeft: 10 }}>
          <FormattedMessage id="page.userManager.table.edit" defaultMessage="Sửa" />
        </span>
      </div>
      <div
        style={itemStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <EyeOutlined />
        <span style={{ marginLeft: 10 }}>
          <FormattedMessage id="page.cvList.view" defaultMessage="Xem thông tin công việc" />
        </span>
      </div>
      <div
        style={itemStyle}
        onClick={handleViewCV}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <FileOutlined />
        <span style={{ marginLeft: 10 }}>
          <FormattedMessage id="page.cvList.viewCV" defaultMessage="Danh sách CV" />
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={itemStyle}
          onClick={handleUploadCV}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <UploadOutlined />
          <span style={{ marginLeft: 10 }}>
            <FormattedMessage id="page.cvList.upload" defaultMessage="Tải CV lên" />
          </span>
        </div>
      </div>
      <div
        style={itemStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <DeleteOutlined />
        <span style={{ marginLeft: 10 }}>
          <FormattedMessage id="page.cvList.delete" defaultMessage="Xóa công việc" />
        </span>
      </div>

      <AddJobModal
        edit={true}
        visible={isEditJob}
        onClose={handleCloseEditJob}
        title={intl.formatMessage({
          id: 'page.cvList.editJob',
          defaultMessage: 'Chỉnh sửa công việc',
        })}
        entity={entity}
      />
      <ModalDetailAddCv
        visible={isAddCV}
        onClose={handleCloseAddCV}
        title={intl.formatMessage({
          id: 'page.cvList.addCV',
          defaultMessage: 'Tải CV lên',
        })}
      />
    </div>
  );
};

export default FormShowMore;
