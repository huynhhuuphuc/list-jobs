import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import defaultSettings from '../config/defaultSettings';
import WrapComponent from './components/WrapComponent/WrapComponent';
import { PAGE_URL } from './commons/constants';
import NoFoundPage from './pages/404';
import NoPermission from './pages/403';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  loading?: boolean;
}> {
  if (history.location.pathname !== PAGE_URL.login) {
    return {
      settings: defaultSettings,
    };
  }
  return {
    settings: defaultSettings,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    menuHeaderRender: undefined,
    childrenRender: (children) => {
      return (
        <>
          <WrapComponent>{children}</WrapComponent>
        </>
      );
    },
    noFound: <NoFoundPage />,
    unAccessible: <NoPermission />,
    ...initialState?.settings,
  };
};
