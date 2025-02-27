type JobListTable = {
  uuid: number;
  name: string;
  end_date: string;
  quantity: string;
  created_by: string;
  status: string;
};
type JobListRequest = {
  ui_chanel: string;
  branch_code: string;
  status: string;
  loan_amount: string;
};
type JobListDetail = JobListTable & {
  referenceInfo: string;
};
type TabActions = {
  edit: boolean;
  complete: boolean;
  [key: string]: boolean;
};
type TabConfig = {
  tab: string;
  key: string;
  disabled: boolean;
  actions?: TabActions;
  link: any;
};
type JobListResponse = {
  contents: JobListTable[];
  paging: PagingResponse;
};
