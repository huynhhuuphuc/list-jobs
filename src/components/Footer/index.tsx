import { useIntl } from 'umi';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'Produced by GIMASYS',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'GIMASYS',
          title: <img src="/images/logo.png" />,
          href: '/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
