import type { Reducer } from 'umi';

const namespace = 'appConfig';
export interface LoadingGlobal {
  numLoadingProcess: number;
}

export interface AppConfigModelState {
  loading: LoadingGlobal;
}

export const AppConfigModelActions = {
  SET_NUM_LOADING: `${namespace}/setNumLoading`,
};

export interface AppConfigModelType {
  namespace: string;
  state: AppConfigModelState;
  reducers: {
    setNumLoading: Reducer<AppConfigModelState>;
  };
}

const AppConfigModel: AppConfigModelType = {
  namespace: namespace,
  state: {
    loading: {
      numLoadingProcess: 0,
    },
  },
  reducers: {
    setNumLoading(state: any, action) {
      return {
        ...state,
        loading: {
          ...state.loading,
          numLoadingProcess: action.payload,
        },
      };
    },
  },
};

export default AppConfigModel;
