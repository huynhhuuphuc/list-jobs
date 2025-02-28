import { InboxOutlined } from '@ant-design/icons';
import { message, Modal, Upload, UploadProps } from 'antd';
import { useIntl } from 'umi';

interface IModalAddCvProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  outsideScreen?: boolean;
  entity?: any;
}

const BUTTON_STYLE = {
  borderRadius: '8px',
};

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const ModalAddCv: React.FC<IModalAddCvProps> = ({
  visible,
  onClose,
  title,
  outsideScreen,
  entity,
}) => {
  const intl = useIntl();
  const { Dragger } = Upload;

  const handleOk = () => {
    onClose();
    message.success('Yêu cầu Huỷ của quý khách thành công');
  };

  return (
    <Modal
      centered
      open={visible}
      onOk={handleOk}
      onCancel={onClose}
      maskClosable={outsideScreen}
      // footer={false}
      width={600}
      // closable={false}
      okText={intl.formatMessage({ id: 'page.cvDetail.table.uploadFile' })}
      okButtonProps={{
        style: {
          display: undefined,
          justifyContent: undefined,
          margin: undefined,
          background: '#46ae87',
          border: 'none',
        },
      }}
    >
      <div>
        <div
          className="text-h4-medium text-center mb-4"
          style={{ fontSize: '18px', fontWeight: 600, color: '#1f1f1f' }}
        >
          {title}
        </div>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Kéo thả một tệp tại đây hoặc <span className="text-primary">Chọn tệp</span>
          </p>
          <p className="ant-upload-hint">Chỉ hỗ trợ với định dạng: PDF, DOC, DOCX</p>
        </Dragger>
      </div>
    </Modal>
  );
};

export default ModalAddCv;
