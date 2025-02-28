import ProForm, { ProFormTextArea } from '@ant-design/pro-form';
import { Button, message, Modal } from 'antd';
import { useIntl } from 'umi';

interface IModalAddNoteProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  outsideScreen?: boolean;
  entity?: any;
}

const BUTTON_STYLE = {
  borderRadius: '8px',
};

const ModalAddNote: React.FC<IModalAddNoteProps> = ({
  visible,
  onClose,
  title,
  outsideScreen,
  entity,
}) => {
  const intl = useIntl();

  const handleOk = () => {
    onClose();
    message.success('Yêu cầu Huỷ của quý khách thành công');
  };

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Modal
      centered
      open={visible}
      onOk={handleOk}
      onCancel={onClose}
      maskClosable={outsideScreen}
      footer={false}
      width={600}
      closable={false}
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
        <ProForm
          className="mt-5"
          onFinish={async (values) => {
            await handleFormSubmit(values);
            return true;
          }}
          submitter={{
            render: (props, doms) => {
              return (
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Button
                    key="submit"
                    style={{ borderRadius: '8px' }}
                    type="primary"
                    onClick={() => props.form?.submit?.()}
                  >
                    {intl.formatMessage({ id: 'page.cvList.add' })}
                  </Button>
                </div>
              );
            },
          }}
        >
          <ProFormTextArea
            placeholder="Nhập đánh giá buổi phỏng vấn"
            colProps={{ span: 12 }}
            name="note"
            label="Đánh giá buổi phỏng vấn"
            fieldProps={{
              maxLength: 200,
              showCount: true,
            }}
            rules={[{ required: true, message: 'Vui lòng nhập đánh giá buổi phỏng vấn' }]}
          />
        </ProForm>
      </div>
    </Modal>
  );
};

export default ModalAddNote;
