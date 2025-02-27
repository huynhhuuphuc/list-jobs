import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  FileOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { FormattedMessage } from 'umi';

const FormShowMore = () => {
  const itemStyle = {
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    padding: '8px 12px',
    borderRadius: 5,
  };

  return (
    <div>
      <div
        style={itemStyle}
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
    </div>
  );
};

export default FormShowMore;
