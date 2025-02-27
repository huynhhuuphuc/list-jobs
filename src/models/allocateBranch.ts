import { USER_INFO } from '@/commons/constants';
import { getCookie } from '@/commons/utils/cookie';
import type { Effect, Reducer, Subscription } from 'umi';
import { getDvaApp } from 'umi';

const namespace = 'allocateBranch';
export interface BranchDetail {
  code: string;
  title: string;
  description: string;
  value?: string;
  label?: string;
}

export interface AllocateBranchModelState {
  branches: BranchDetail[];
  showSelection: boolean;
  branchSelected: string;
  loanIds: any[];
  // true is allocate false -> unAllocate
  isAllocate: boolean;
}

export const AllocateBranchActions = {
  GET_BRANCHES: `${namespace}/getBranch`,
  TOGGLE_MODEL_SELECTION: `${namespace}/toggleSelection`,
  SET_BRANCH_SELECTED: `${namespace}/setBranchSelected`,
  SET_VALUES_SELECTION: `${namespace}/setValuesSelection`,
};

export interface AllocateBranchModelType {
  namespace: string;
  state: AllocateBranchModelState;
  effects: {
    getBranch: Effect;
  };
  reducers: {
    setBranches: Reducer<AllocateBranchModelState>;
    toggleSelection: Reducer<AllocateBranchModelState>;
    setBranchSelected: Reducer<AllocateBranchModelState>;
    setValuesSelection: Reducer<AllocateBranchModelState>;
  };
  subscriptions: { setup: Subscription };
}

const AllocateBranchModel: AllocateBranchModelType = {
  namespace: namespace,
  state: {
    branches: [],
    showSelection: false,
    branchSelected: '',
    loanIds: [],
    isAllocate: true,
  },
  effects: {
    *getBranch(_, { call, put }) {
      let response: any = {};
      try {
        response = yield call(Promise.resolve([]));
      } catch (error) {
        response = null;
      }
      const data = response?.data?.branches;
      yield put({
        type: 'setBranches',
        payload: data
          ? data.map((item: BranchDetail) => {
              return { label: item.title, value: item.code };
            })
          : [],
      });
    },
  },
  reducers: {
    setBranches(state: any, action) {
      return {
        ...state,
        branches: action.payload,
      };
    },
    toggleSelection(state: any, action) {
      return {
        ...state,
        showSelection: action.payload,
      };
    },
    setBranchSelected(state: any, action) {
      return {
        ...state,
        branchSelected: action.payload,
      };
    },
    setValuesSelection(state: any, action) {
      return {
        ...state,
        loanIds: action?.payload?.loanIds || [],
        isAllocate: action?.payload?.isAllocate || true,
        showSelection: action?.payload?.showSelection,
      };
    },
  },
  subscriptions: {
    setup({ history }) {
      return history.listen(() => {
        if (getDvaApp()?._store?.getState()?.allocateBranch?.branches.length == 0) {
          if (getCookie(USER_INFO)) {
            console.log('get branches');
            // dispatch({
            //   type: 'getBranch',
            // });
          }
        }
      });
    },
  },
};

export default AllocateBranchModel;
