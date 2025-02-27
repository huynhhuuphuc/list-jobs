import type { PAGING_ORDER } from '../constants';

type PagingAntTable = {
  current?: number;
  pageSize?: number;
  [key: string]: any;
};
type DataMapperAntTable = {
  data?: any[];
  total?: number;
  success?: boolean;
};
type PagingAPI = {
  page: number;
  size: number;
  orders?: Record<string, PAGING_ORDER>;
};
type DataTableRequest = {
  paging?: PagingAPI;
  sort?: any;
  filter?: any;
  params?: any;
  [key: string]: any;
};
type PagingResponse = {
  pageNumber?: number;
  pageSize?: number;
  totalPage?: number;
  totalRecord?: number;
  page_number?: number;
  page_size?: number;
  total_page?: number;
  total_record?: number;
};
type DataTableMapper<T> = {
  contents?: T[];
  paging?: PagingResponse;
};
type DataResponseAPI<T> = {
  data: T;
  status?:
    | {
        code: any;
        timestamp: any;
        message: any;
      }
    | any;
};
type AntDataTableResponse<T> = {
  data?: T[];
  total?: number;
  success?: boolean;
};
type DataTableResponse<T> = DataResponseAPI<DataTableMapper<T>>;
type CallApi = (
  params: DataTableRequest,
  options?: Record<string, any>,
) => Promise<DataResponseAPI<any>>;

export {
  DataResponseAPI,
  DataTableResponse,
  DataTableMapper,
  CallApi,
  AntDataTableResponse,
  DataTableRequest,
  PagingAntTable,
  DataMapperAntTable,
};
