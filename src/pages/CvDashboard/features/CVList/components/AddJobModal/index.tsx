import ProForm, { ProFormDatePicker, ProFormText } from '@ant-design/pro-form';
import { Button, Col, message, Modal, Row } from 'antd';
import moment from 'moment';
import { useIntl } from 'umi';

interface IAddJobModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  outsideScreen?: boolean;
  entity?: any;
  edit?: boolean;
}

const BUTTON_STYLE = {
  borderRadius: '8px',
};

const AddJobModal: React.FC<IAddJobModalProps> = ({
  visible,
  onClose,
  title,
  outsideScreen,
  entity,
  edit,
}) => {
  const [form] = ProForm.useForm();
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

  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };

  const formatDate = (date: any) => {
    return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
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
      okText={
        edit
          ? intl.formatMessage({ id: 'page.cvList.editJob' })
          : intl.formatMessage({ id: 'page.cvList.createJob' })
      }
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
        <ProForm
          form={form}
          className="mt-5"
          onFinish={handleFormSubmit}
          initialValues={{
            jobName: entity ? entity.name : '',
            expiredDate: entity ? formatDate(entity.end_date) : null,
            quantity: entity ? entity.quantity : '',
            link: entity ? entity.link : '',
          }}
          submitter={{
            render: (props) => [
              // eslint-disable-next-line react/jsx-key
              <div style={{ textAlign: 'right' }}>
                <Button
                  key="reset"
                  style={BUTTON_STYLE}
                  onClick={() => {
                    form.setFieldsValue({
                      jobName: entity ? entity.name : '',
                      expiredDate: entity ? formatDate(entity.end_date) : null,
                      quantity: entity ? entity.quantity : '',
                      link: entity ? entity.link : '',
                    });
                    message.info('Đã trở về trạng thái ban đầu');
                  }}
                >
                  {intl.formatMessage({
                    id: 'page.cvList.reset',
                    defaultMessage: 'Reset',
                  })}
                </Button>
                ,
                <Button
                  key="submit"
                  type="primary"
                  style={BUTTON_STYLE}
                  onClick={() => props.form?.submit?.()}
                >
                  {intl.formatMessage({
                    id: 'page.cvList.createJob',
                    defaultMessage: 'Tạo',
                  })}
                </Button>
              </div>,
            ],
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <ProFormText
                name="jobName"
                label={intl.formatMessage({
                  id: 'page.cvList.jobName',
                  defaultMessage: 'Tên công việc',
                })}
                placeholder="Nhập tên công việc"
                rules={[{ required: true, message: 'Vui lòng nhập tên công việc' }]}
              />
            </Col>
            <Col span={12}>
              <ProFormDatePicker
                name="expiredDate"
                width="lg"
                label={intl.formatMessage({
                  id: 'page.cvList.expiredDate',
                  defaultMessage: 'Ngày hết hạn',
                })}
                placeholder="Nhập ngày hết hạn"
                rules={[{ required: true, message: 'Vui lòng nhập ngày hết hạn' }]}
              />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <ProFormText
                name="quantity"
                label={intl.formatMessage({
                  id: 'page.cvList.quantity1',
                  defaultMessage: 'Số lượng tuyển dụng',
                })}
                placeholder="Nhập số lượng tuyển dụng"
                rules={[{ required: true, message: 'Vui lòng nhập số lượng tuyển dụng' }]}
                fieldProps={{
                  maxLength: 20,
                  showCount: true,
                }}
              />
            </Col>
            <Col span={12}>
              <ProFormText
                name="link"
                label={intl.formatMessage({
                  id: 'page.cvList.link',
                  defaultMessage: 'Đường dẫn thông tin thêm',
                })}
                placeholder="Nhập đường dẫn thông tin thêm"
                rules={[{ required: true, message: 'Vui lòng nhập đường dẫn thông tin thêm' }]}
              />
            </Col>
          </Row>
        </ProForm>
      </div>
    </Modal>
  );
};

export default AddJobModal;
