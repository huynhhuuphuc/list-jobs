export * from './dataTable';

type ItemType = {
  label: string;
  value: any;
  disabled?: boolean;
};
type ItemTypeByCode<T> = {
  label: string;
  value: T;
  disabled?: boolean;
};
type FileInfo = {
  path: string;
  fileName: string;
};
type PresignedUrlResponse = {
  url: string;
  headersNeedToAdd: string;
};
type ValidationType = {
  message?: string;
  isValid?: boolean;
};
export { ItemType, FileInfo, ItemTypeByCode, PresignedUrlResponse, ValidationType };
