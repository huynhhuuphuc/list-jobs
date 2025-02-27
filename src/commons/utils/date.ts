import moment from 'moment';

const getDefaultDate = (): any[] => {
  const today = new Date();
  today.setDate(today.getDate() - 7);
  const date = new Date(today);
  return [date.getTime(), new Date().getTime()];
};
const formatDateByLong = (value: number, isShort: boolean = false): string => {
  // const date = new Date(value);
  if (!value) return '';
  const date = new Date(value);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  let result = '';

  if (!isShort) {
    result +=
      (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' | ';
  }

  return (
    result + (day < 10 ? '0' + day : day) + '/' + (month < 10 ? '0' + month : month) + '/' + year
  );
};
const disableGTCurrDate = (current: any) => {
  // Can not select days after today
  return current && current > moment().endOf('day');
};
const disableLTCurrDate = (current: any) => {
  // Can not select days before today
  return current && current < moment().endOf('day');
};
const isLessThanDate = (firstDate: any, secondDate: any) => {
  if (!firstDate || !secondDate) {
    return false;
  }
  const fDate = moment(firstDate);
  const sDate = moment(secondDate);
  if (!fDate.isValid() || !sDate.isValid()) {
    return false;
  }
  return fDate.isBefore(sDate);
};
const isLessEqualThanDate = (firstDate: any, secondDate: any) => {
  if (!firstDate || !secondDate) {
    return false;
  }
  const fDate = moment(firstDate);
  const sDate = moment(secondDate);
  if (!fDate.isValid() || !sDate.isValid()) {
    return false;
  }
  return fDate.isSameOrBefore(sDate);
};

const dateReformat = (date: any, formatPasser: string, formatApply: string) => {
  const mDate = moment(date, formatPasser);
  return mDate.isValid() ? mDate.format(formatApply) : null;
};

export {
  getDefaultDate,
  formatDateByLong,
  disableGTCurrDate,
  disableLTCurrDate,
  isLessThanDate,
  isLessEqualThanDate,
  dateReformat,
};
