import { getIntl } from 'umi';

const showTotal = (all: any, range: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  return `${getIntl().formatMessage({
    id: 'pagination.total.range',
    defaultMessage: ' ',
  })} ${range[0]}-${range[1]} ${getIntl().formatMessage({
    id: 'pagination.total.total',
    defaultMessage: 'trên',
  })} ${all} ${getIntl().formatMessage({ id: 'pagination.total.item', defaultMessage: 'hồ sơ' })}`;
};
export { showTotal };
