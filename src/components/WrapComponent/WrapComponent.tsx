import { Spin } from 'antd';
import { useSelector } from 'umi';
// import HiddenContent from '../HiddenContent';

function WrapComponent(props: any) {
  const { children } = props;
  const loading = useSelector((store: any) => store.loading.global);
  return (
    <Spin spinning={loading}>
      {children}
      {/* <HiddenContent /> */}
    </Spin>
  );
}

export default WrapComponent;
