import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  headerHeight: 60,
  primaryColor: '#EB6719',
  layout: 'mix',
  menuRender: false,
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: '',
  pwa: false,
  logo: '/images/logo.png',
  iconfontUrl: '',
  menu: {
    locale: true,
  },
};

export default Settings;
