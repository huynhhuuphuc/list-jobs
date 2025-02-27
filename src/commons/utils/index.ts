import moment from 'moment';
import { FILE_SIZE } from '../constants';

/**
 * @description format number currency to string like 100,000,000
 * @param value
 * @returns
 */
const formatterCurrency = (value: any) => {
  if (!value) {
    return '0';
  }
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * @description remove ',' in currency string
 * @param value
 * @returns
 */
const parserCurrency = (value: any) => {
  return value.replace(/\$\s?|(,*)/g, '');
};

/**
 * @description convert string to float
 * @param value
 * @returns
 */
const strToFloat = (value: any) => {
  if (value) {
    return parseFloat(parserCurrency(value));
  }
  return 0;
};

/**
 * @description get label by value in options
 * @param value value of item
 * @param array options
 * @param unCheckFalsy true and falsy value return '' else if false return '-'
 * @returns
 */
const getLabelByValue = (value: any, array: any[], unCheckFalsy?: boolean) => {
  if (!unCheckFalsy && !value) {
    return '-';
  }
  const data = array.find((item) => item.value == value);
  return data ? data.label : '';
};

/**
 * @description get value by label in options
 * @param label label of item
 * @param list option
 * @param labelText property as label of item
 * @returns
 */
const getValueByLabel = (label: any, list: any[], labelText = 'label') => {
  if (label) {
    const dataItem = list.find((item) => item[labelText] == label);
    return dataItem?.value || '';
  }
  return label;
};

/**
 * @description create link to download file
 * @param blob
 * @param nameFile
 */
const crateLinkDownload = (blob: any, nameFile: string) => {
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = nameFile;
  link.click();
  if (link.parentNode != null) link.parentNode.removeChild(link);
};

/**
 * @description create link to download file
 * @param blob
 * @param nameFile
 */
const crateLinkDownloadDirectly = (blob: any, nameFile: string) => {
  const link = document.createElement('a');
  link.href = typeof blob === 'string' ? blob : window.URL.createObjectURL(blob);
  link.download = nameFile;
  link.click();
  if (link.parentNode != null) link.parentNode.removeChild(link);
};

/**
 * @description create file blob then createLinkDownload
 * @param nameFile name of file
 * @param type extensions of file like pdf, doc...
 * @param data data blob or arraybuffer , byte...
 */
const createFileDownload = async (nameFile: string, type: string = '', data: any) => {
  const blob = new Blob([data], { type: type });
  crateLinkDownload(blob, nameFile);
};

/**
 * @description object assign only type of object
 * @param originObj obj type original
 * @param dataObj data assign
 */
function objectMapper<Type>(originObj: Type, dataObj: any) {
  Object.keys(originObj).forEach((key) => {
    originObj[key] = dataObj[key];
  });
}

/**
 * @description check file type valid with expect type
 * @param file
 * @param fileAcceptNonPa
 * @returns is valid
 */
const isValidFileType = (file: any, fileAcceptNonPa: string[]): boolean => {
  if (!fileAcceptNonPa.includes(file.type)) return false;
  return true;
};

/**
 * @description check files size upload total size allow
 * @param files
 * @returns is valid
 */
const isValidFileSize = (files: File[]): boolean => {
  let total = 0;
  for (const element of files) {
    total = total + element.size;
  }
  return total < FILE_SIZE.maxSizeLoanUpload;
};

/**
 * @description check file size upload single size allow
 * @param file
 * @returns is valid
 */
const isValidPerFileSize = (file: any, size: number): boolean => {
  if (file.size > size) return false;
  return true;
};

/**
 * @description date time to string format
 * @param value date or string format
 * @param format
 * @returns
 */
const dateTimeFormatToString = (value: any, format: string) => {
  if (!value) {
    return '-';
  }
  const currentDate = moment(value);
  if (currentDate.isValid()) {
    return currentDate.format(format);
  } else {
    return '-';
  }
};

/**
 * @description check array exist a element
 * @param array
 * @param data
 * @returns
 */
const isExistInArray = (array: any[], data: any) => {
  return array?.indexOf(data) >= 0;
};

export {
  formatterCurrency,
  parserCurrency,
  strToFloat,
  getLabelByValue,
  getValueByLabel,
  crateLinkDownload,
  createFileDownload,
  crateLinkDownloadDirectly,
  objectMapper,
  isValidFileType,
  isValidFileSize,
  isValidPerFileSize,
  dateTimeFormatToString,
  isExistInArray,
};
