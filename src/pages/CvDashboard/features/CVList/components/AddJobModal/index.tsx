import { message, Modal } from 'antd';
import { useIntl } from 'umi';

interface IAddJobModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  outsideScreen?: boolean;
}
const AddJobModal: React.FC<IAddJobModalProps> = ({ visible, onClose, title, outsideScreen }) => {
  const intl = useIntl();
  const handleOk = () => {
    onClose();
    message.success('Yêu cầu Huỷ của quý khách thành công');
    try {
      message.success('Yêu cầu Huỷ của quý khách thành công');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      centered
      open={visible}
      onOk={handleOk}
      onCancel={onClose}
      maskClosable={outsideScreen}
      closable={false}
      okText={intl.formatMessage({ id: 'page.cvList.createJob' })}
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
        <div style={{ fontSize: '18px', fontWeight: 600, color: '#1f1f1f' }}>{title}</div>
      </div>
    </Modal>
  );
};

export default AddJobModal;
