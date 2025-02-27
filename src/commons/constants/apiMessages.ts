const ERRORS_CODE_MAP: Record<any, string> = {
  401: 'Vui lòng đăng nhập lại!',
  500: 'Lỗi hệ thống xin vui lòng liên hệ với quản trị viên!',
  404014: 'User chưa được thêm vào hệ thống, vui lòng liên hệ với quản trị viên!',
};
const ERRORS_DOWNLOAD_FILE_CODE_MAP: Record<any, string> = {
  invalid_parameter_exception: 'Có lỗi xảy ra, vui lòng thử lại!',
  404013: 'Không tìm thấy file ',
  404: 'Không tìm thấy file ',
  400: 'Có lỗi xảy ra, vui lòng thử lại!',
  400025: 'Hồ sơ chưa sẵn sàng tải!',
};
const API_MESSAGE_RESPONSE = {
  loanApplication: {
    getDetail: {
      success: '',
      fail: 'Không tìm thấy thông tin hồ sơ!',
    },
    update: {
      success: 'Cập nhật thành công!',
      fail: 'Cập nhật thất bại, xin vui lòng kiểm tra lại!',
    },
    completeModify: {
      success: 'Cập nhật thành công!',
      fail: 'Cập nhật thất bại, xin vui lòng kiểm tra lại!',
    },
    upload: {
      success: 'Tải file thành công!',
      fail: 'Lỗi không thể tải file, xin vui lòng thử lại!',
      maxSize: 'Tổng dung lượng tối đa cho phép là 50MB.',
      maxPerSize: 'Dung lượng tối đa cho phép là 10MB.',
      formatNonPa: 'Vui lòng chọn hồ sơ có định dạng: jpg/pdf/png/zip.',
      name: 'Hồ sơ tải lên bị trùng tên.',
      readFailed: 'Không thể đọc tệp, xin hãy thử lại.',
    },
    deleteFile: {
      success: 'Xoá file thành công!',
      fail: 'Xoá file lỗi!',
    },
    completeCheck: {
      success: 'Đã hoàn thành kiểm tra!',
      fail: 'Lỗi xin vui lòng thử lại!',
    },
    checkInfoCSS: {
      update: {
        success: 'Cập nhật thành công!',
        fail: 'Cập nhật thất bại, xin vui lòng kiểm tra lại!',
      },
    },
  },
  allocated: {
    success: 'Phân bổ thành công!',
    fail: 'Phân bổ không thành công, xin vui lòng thử lại!',
  },
  unAllocated: {
    success: 'Bỏ Phân bổ thành công!',
    fail: 'Bỏ Phân bổ không thành công, xin vui lòng thử lại!',
  },
  s3Download: {
    success: 'Tải file thành công!',
    fail: 'Tải file từ s3 không thành công, xin vui lòng thử lại!',
  },
  downloadFile: {
    success: 'Tải file thành công',
    fail: 'Tải file lỗi, xin vui lòng thử lại!',
  },
  uploadPreApprove: {
    upload: {
      success: 'Tải file thành công!',
      format: 'Vui lòng chọn hồ sơ có định dạng: xls/xlsx.',
      fail: 'Lỗi không thể tải file, xin vui lòng thử lại!',
      maxPerSize: 'Dung lượng tối đa cho phép là 100MB.',
      name: 'Hồ sơ tải lên bị trùng tên.',
      readFailed: 'Không thể đọc tệp, xin hãy thử lại.',
      fileFail: 'Có lỗi xảy ra, vui lòng kiểm tra dữ liệu của file!',
    },
  },
};

export { ERRORS_CODE_MAP, ERRORS_DOWNLOAD_FILE_CODE_MAP, API_MESSAGE_RESPONSE };
