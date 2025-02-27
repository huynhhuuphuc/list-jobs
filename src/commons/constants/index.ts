export * from './pathUrl';
export * from './cookie';
export const TYPE_SALE_PREVIEW = 'sale_preview';
export const DATE_FORMAT = 'DD/MM/YYYY';
export const API_DATE_FORMAT = 'YYYYMMDD';
export const DATE_MONTH_FORMAT = 'MM/YYYY';
export const DATE_FORMAT_US = 'YYYY_MM_DD';
export const DATE_TIME_FORMAT_TABLE = 'HH:mm DD/MM/YYYY';
export const DATE_FORMAT_FILE = 'YYYY_MM_DD';
export const FILE_SIZE = {
  maxSizePerFile: 10485760,
  maxSizeLoanUpload: 52428800,
  maxSizePreApprove: 104857600,
};
export enum PAGING_ORDER {
  DESC = 'DESC',
}
export enum RolePermission {
  CJ5_ADMIN = 'CJ5-ADMIN',
  CJ5_RM = 'CJ5-RM',
  CJ5_BM = 'CJ5-BM',
  CJ5_LOAN_APPLICATION_PRE_ZIP_FILE = 'CJ5-LOAN_APPLICATION-PRE_ZIP_FILE', // Download zip file của hồ sơ vay trên CMS
  CJ5_LOAN_APPLICATION_SEARCH = 'CJ5-LOAN_APPLICATION-SEARCH', //Tìm kiếm hồ sơ vay trên CMS
  CJ5_LOAN_APPLICATION_CLOSE = 'CJ5-LOAN_APPLICATION-CLOSE', // Đóng hồ sơ vay
  CJ5_LOAN_APPLICATION_EXPORT = 'CJ5-LOAN_APPLICATION-EXPORT', // Xuất ra file excel danh sách hồ sơ vay
  CJ5_LOAN_APPLICATION_DETAIL = 'CJ5-LOAN_APPLICATION-DETAIL', // Xem chi tiết hồ sơ vay
  CJ5_LOAN_APPLICATION_EXPORT_PROPOSAL_LETTER = 'CJ5-LOAN_APPLICATION-EXPORT_PROPOSAL_LETTER', // Xuất tờ trình
  CJ5_LOAN_APPLICATION_COMMENT_SAVE = 'CJ5-LOAN_APPLICATION_COMMENT-SAVE', // Tạo phản hồi trên CMS
  CJ5_LOAN_APPLICATION_COMMENT_UPDATE = 'CJ5-LOAN_APPLICATION_COMMENT-UPDATE', // Cập nhật phản hồi trên CMS
  CJ5_LOAN_APPLICATION_COMMENT_DELETE = 'CJ5-LOAN_APPLICATION_COMMENT-DELETE', // Xóa phản hồi trên CMS
  CJ5_LOAN_APPLICATION_COMMENT_HISTORY = 'CJ5-LOAN_APPLICATION_COMMENT-HISTORY', // Lịch sử phản hồi trên CMS
  CJ5_UPLOAD_FILE_COMMENT_SAVE = 'CJ5-UPLOAD_FILE_COMMENT-SAVE', // "Tạo phản hồi trên CMS (mục hồ sơ)
  CJ5_UPLOAD_FILE_COMMENT_UPDATE = 'CJ5-UPLOAD_FILE_COMMENT-UPDATE', // Cập nhật phản hồi trên CMS (mục hồ sơ)
  CJ5_UPLOAD_FILE_COMMENT_DELETE = 'CJ5-UPLOAD_FILE_COMMENT-DELETE', // Xóa phản hồi trên CMS (mục hồ sơ)
  CJ5_UPLOAD_FILE_COMMENT_HISTORY = 'CJ5-UPLOAD_FILE_COMMENT-HISTORY', // Lịch sử phản hồi trên CMS (mục hồ sơ)
  CJ5_UPLOAD_FILE_STATUS_SAVE = 'CJ5-UPLOAD_FILE_STATUS-SAVE', // Cập nhật trạng thái hồ sơ Thiếu/Đủ
}
export enum UploadFileType {
  Image = 'image',
  Document = 'document',
}
export enum FileUploadStatus {
  DONE = 'done',
  SUCCESS = 'success',
  REMOVED = 'removed',
  FAIL = 'fail',
  UPLOADING = 'uploading',
  ERROR = 'error',
}
export enum APIStatusCode {
  SUCCESS = 200,
  UN_AUTHOR = 401,
  INTERNAL_SERVER = 500,
  NOT_FOUND = 404,
}
export enum FileDownloadsExtension {
  XLSX = '.xlsx',
  XLSM = 'xlsm',
  PDF = 'pdf',
  ZIP = '.zip',
  XML = '.xml',
}
