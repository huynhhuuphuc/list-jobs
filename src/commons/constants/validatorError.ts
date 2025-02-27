export const ERROR_MESSAGES = {
  name: {
    require: 'Bạn cần nhập họ và tên đầy đủ, có dấu cách ở giữa.',
    invalid: 'Bạn cần điền đầy đủ họ và tên.',
  },
  phoneNumber: {
    require: 'Vui lòng điền vào số điện thoại.',
    startWithZero: 'Bạn cần nhập số điện thoại gồm 10 chữ số, bắt đầu bởi số 0.',
  },
  cmnd: {
    require: 'Vui lòng nhập số  CMND hoặc CCCD.',
    invalid: 'Số CCCD/CMND phải có 9 hoặc 12 chữ số.',
    duplicate: 'Vui lòng không nhập trùng số CMND/CCCD hoặc Hộ chiếu.',
  },
  passport: {
    require: 'Vui lòng nhập số  hộ chiếu.',
    invalid: 'Số hộ chiếu gồm 8 ký tự, bắt đầu bằng 1 chữ cái.',
  },
  email: {
    require: 'Vui lòng điền vào địa chỉ email.',
    invalid: 'Địa chỉ email không đúng định dạng.',
  },
  dateOfBirth: {
    ageForFemale: 'Sản phẩm vay phù hợp cho khách hàng từ 20 đến 55 tuổi.',
    ageForMale: 'Sản phẩm vay phù hợp cho khách hàng từ 20 đến 60 tuổi.',
  },
  dateOfCCDExpire: {
    isLessThan: 'Ngày hết hạn phải lớn hơn ngày cấp',
  },
  reportDate: {
    inValid: 'Ngày kết thúc phải lớn hơn ngày bắt đầu',
  },
  number: {
    isGreaterThan: 'Số tiền từ phải nhỏ hơn số tiền đến',
  },
};

export const COMMON_MESSAGE_ERROR = {
  required: 'Vui lòng nhập đầy đủ thông tin!',
};
