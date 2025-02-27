import { APIStatusCode } from '@/commons/constants';
import type {
  CallApi,
  DataMapperAntTable,
  DataTableRequest,
  DataTableResponse,
  PagingAntTable,
} from '@/commons/types';

export async function dataTableMapper(
  params: PagingAntTable,
  orders?: any,
  filter?: any,
  options?: Record<string, any>,
  callApi?: CallApi,
): Promise<DataMapperAntTable> {
  const initBody: DataTableRequest = {
    paging: {
      page: params.current ? params.current - 1 : 0,
      size: params.pageSize || 10,
      orders: {
        ...orders,
      },
    },
    ...filter,
  };
  const data: DataTableResponse<any> | null = callApi ? await callApi(initBody, options) : null;
  const dataTable: DataMapperAntTable = {
    data: data?.data?.contents || [],
    total: data?.data?.paging?.total_record || data?.data?.paging?.totalRecord,
    success: data?.status == APIStatusCode.SUCCESS || data?.status?.code == APIStatusCode.SUCCESS,
  };
  return dataTable;
}
