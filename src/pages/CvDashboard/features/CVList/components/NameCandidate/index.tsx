import React, { useState } from 'react';
import { useIntl, useSelector } from 'umi';
import { Button, Card, Col, Row } from 'antd';
import styles from './index.less';
import ModalAddVideo from './components/AddVideoModal';
import ModalAddNote from './components/AddNoteModal';

const NameCandidate: React.FC = () => {
  const intl = useIntl();
  const entity = useSelector((state: any) => state.candidateName.entity);
  const [visibleVideo, setVisibleVideo] = useState(false);
  const [visibleNote, setVisibleNote] = useState(false);

  const handleAddVideo = () => {
    setVisibleVideo(true);
  };

  const handleCloseVideo = () => {
    setVisibleVideo(false);
  };

  const handleAddNote = () => {
    setVisibleNote(true);
  };

  const handleCloseNote = () => {
    setVisibleNote(false);
  };

  return (
    <div>
      <div>
        <div className="text-h4-medium">
          {intl.formatMessage({
            id: 'page.cvList.candidateNameInfo',
            defaultMessage: 'Thông tin ứng viên',
          })}{' '}
          {entity?.full_name}
        </div>
        <Row className="d-flex justify-content-between mt-32" gutter={16}>
          <Col span={8}>
            <iframe
              id="fred"
              style={{ border: '1px solid #666ccc', borderRadius: '12px' }}
              title="PDF in an i-Frame"
              src={entity?.sync_order_form}
              frameBorder="1"
              scrolling="auto"
              width="100%"
              height="600px"
            />
          </Col>
          <Col span={8}>
            <Card className={styles.scoreCard}>
              <div className="text-h4-medium">Điểm số: 85/100</div>
              <div>
                <p className="">
                  Hồ sơ cho thấy kỹ năng và kinh nghiệm mạnh mẽ; các câu hỏi tình huống có thể khai
                  thác ứng dụng của họ.
                </p>
              </div>
            </Card>
            <Card className="mt-32" style={{ minHeight: '433px' }}>
              <div className="text-h4-medium text-center border-bottom pb-12">
                {intl.formatMessage({
                  id: 'page.cvList.candidateSummary',
                  defaultMessage: 'Tổng quan về ứng viên',
                })}
              </div>
              <div className="mt-12">
                <p>
                  Hồ sơ cho thấy kỹ năng và kinh nghiệm mạnh mẽ; các câu hỏi tình huống có thể khai
                  thác ứng dụng của họ.
                </p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <div className="text-h4-medium text-center border-bottom pb-12">
                Tài liệu buổi phỏng vấn
              </div>
              <div className="mt-12">
                <Row gutter={16}>
                  <Col span={12}>
                    <Button type="primary" className="w-100" onClick={handleAddVideo}>
                      Thêm video
                    </Button>
                  </Col>
                  <Col span={12} onClick={handleAddNote}>
                    <Button className="w-100">Thêm ghi chú</Button>
                  </Col>
                </Row>
              </div>
            </Card>
            <Card className="mt-32" style={{ minHeight: '433px' }}>
              <div className="text-h4-medium text-center border-bottom pb-12">
                {intl.formatMessage({
                  id: 'page.cvList.interviewEvaluation',
                  defaultMessage: 'Đánh giá buổi phỏng vấn',
                })}
              </div>
              <div className="mt-12">
                <p
                  style={{
                    color: '#8f8f8f',
                    fontWeight: 600,
                    fontSize: '16px',
                    textAlign: 'center',
                  }}
                >
                  Hiện chưa có tài liệu phỏng vấn
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <ModalAddVideo
        visible={visibleVideo}
        onClose={handleCloseVideo}
        title="TẢI LÊN VIDEO BUỔI PHỎNG VẤN"
      />
      <ModalAddNote
        visible={visibleNote}
        onClose={handleCloseNote}
        title="TẢI LÊN GHI CHÚ BUỔI PHỎNG VẤN"
      />
    </div>
  );
};

export default NameCandidate;
