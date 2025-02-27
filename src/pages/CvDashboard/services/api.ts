import type {
  DataMapperAntTable,
  DataResponseAPI,
  DataTableRequest,
  DataTableResponse,
  PagingAntTable,
} from '@/commons/types';
import { CV_DASHBOARD_LIST } from './apiUrl';
import request from 'umi-request';
import { dataTableMapper } from '@/commons/services/base/dataTable';

const getJobList = (
  params: DataTableRequest,
  options?: Record<string, any>,
): Promise<DataResponseAPI<JobListTable>> => {
  const dataBody = {
    ...params.paging,
    orders: {
      createdDate: 'DESC',
    },
  };
  return request(CV_DASHBOARD_LIST.List, {
    method: 'POST',
    data: {
      ...dataBody,
    },
    ...(options || {}),
  });
};

const dataTableJobList = async (
  params: PagingAntTable,
  sort?: any,
  filter?: any,
  options?: Record<string, any>,
): Promise<DataMapperAntTable> => {
  const data = await dataTableMapper(params, sort, filter, options, getJobList);
  return data;
};

export { getJobList, dataTableJobList };
