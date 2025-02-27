import { ERROR_MESSAGES } from '../constants/validatorError';
import type { ValidationType } from '../types';
import { isLessEqualThanDate, isLessThanDate } from './date';

const namePattern = /([A-zÀ-Ỹ,',-]{1,}(\\D+){0,} (\\D+){0,}[,',-,A-zÀ-Ỹ]{1,}){1,}/gi;
const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneNumberPattern = /(^0+[0-9]{9})\b/;
const CCCDCMNDPattern = /^(\d{9}|\d{12})$/;
const numberPattern = /^[0-9]/g;
const excludeNumberPattern = /[^0-9]/g;
const imageExtensionPattern = /[^\\s]+(.*?)\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/;
const pdfExtensionPattern = /[^\\s]+(.*?)\.(pdf|PDF)$/;
const wordExtensionPattern = /[^\\s]+(.*?)\.(doc|docx|dot|dotx|DOC|DOCX|DOT|DOTX)$/;
const excelsExtensionPattern = /[^\\s]+(.*?)\.(xls|xlsx|xlsm|csv|XLS|XLSX|XLSM|CSV)$/;
const PatternValidate = {
  namePattern,
  emailPattern,
  phoneNumberPattern,
  CCCDCMNDPattern,
  numberPattern,
  pdfExtensionPattern,
  imageExtensionPattern,
  wordExtensionPattern,
  excelsExtensionPattern,
};

const getAge = (dateString: any) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  const age = today.getFullYear() - birthDate.getFullYear();

  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    return parseFloat(`${age - 1}.5`);
  }

  if (m > 0 || (m === 0 && today.getDate() > birthDate.getDate())) {
    return parseFloat(`${age}.5`);
  }

  return age;
};

const isValidDateOfBirth = (date: any, gender: any) => {
  let isValid = true;
  let message = '';
  const copyDate = new Date(date);
  const age = getAge(copyDate);
  if (gender === 'M') {
    // sản phẩm cho nam từ 20 - 60 tuổi
    if (age < 20 || age > 60) {
      isValid = false;
      message = ERROR_MESSAGES.dateOfBirth.ageForMale;
    }
  }

  if (gender === 'F') {
    // sản phẩm cho nữ từ 20 - 55 tuổi
    if (age < 20 || age > 55) {
      isValid = false;
      message = ERROR_MESSAGES.dateOfBirth.ageForFemale;
    }
  }

  return {
    isValid,
    message,
  };
};

const isValidDateExpireCCCD = (expireDate: any, registerDate: any) => {
  let isValid = true;
  let message = '';
  isValid = isLessThanDate(expireDate, registerDate);
  if (!isValid) {
    message = ERROR_MESSAGES.dateOfCCDExpire.isLessThan;
  }
  return {
    isValid,
    message,
  };
};

const isValidDateExpire = (expireDate: any, registerDate: any) => {
  let isValid = true;
  let message = '';
  if (!expireDate || !registerDate) {
    return {
      isValid,
      message,
    };
  }
  isValid = isLessEqualThanDate(expireDate, registerDate);
  if (!isValid) {
    message = ERROR_MESSAGES.reportDate.inValid;
  }
  return {
    isValid,
    message,
  };
};

const inputNumberOnly = (event: any) => {
  return event.target.value.replace(excludeNumberPattern, '');
};

const isValidNumberGreaterThan = (
  fromNumber: number,
  toNumber: number,
  message?: string,
): ValidationType => {
  const check: ValidationType = {};
  if (fromNumber > toNumber) {
    check.isValid = false;
    check.message = message || '';
  } else {
    check.isValid = true;
  }
  return check;
};

export {
  getAge,
  PatternValidate,
  isValidDateOfBirth,
  isValidDateExpireCCCD,
  isValidDateExpire,
  inputNumberOnly,
  isValidNumberGreaterThan,
};
