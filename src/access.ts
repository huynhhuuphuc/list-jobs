import { RolePermission } from './commons/constants';
import { isExistInArray } from './commons/utils';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API_USER.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    roleAdmin: currentUser && isExistInArray(currentUser?.roles, RolePermission.CJ5_ADMIN),
    roleBM: currentUser && isExistInArray(currentUser?.roles, RolePermission.CJ5_BM),
    roleRM: currentUser && isExistInArray(currentUser?.roles, RolePermission.CJ5_RM),
    canLoanSearch:
      currentUser &&
      isExistInArray(currentUser?.permissions, RolePermission.CJ5_LOAN_APPLICATION_SEARCH),
    canLoanViewDetail:
      currentUser &&
      isExistInArray(currentUser?.permissions, RolePermission.CJ5_LOAN_APPLICATION_DETAIL),
    canLoanCloseApp:
      currentUser &&
      isExistInArray(currentUser?.permissions, RolePermission.CJ5_LOAN_APPLICATION_CLOSE),
  };
}
