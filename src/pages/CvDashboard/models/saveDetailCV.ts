import type { Effect, Reducer } from 'umi';

const namespace = 'cvDashboard';

export interface CvDashboardModelState {
  entity: Record<string, any>;
}

export const CvDashboardActions = {
  SET_ENTITY: `${namespace}/setEntity`,
};

export interface CvDashboardModelType {
  namespace: string;
  state: CvDashboardModelState;
  effects: {
    setEntity: Effect;
  };
  reducers: {
    updateEntity: Reducer<CvDashboardModelState>;
  };
}

const CvDashboardModel: CvDashboardModelType = {
  namespace: namespace,

  state: {
    entity: {},
  },

  effects: {
    *setEntity({ payload }, { put }) {
      yield put({
        type: 'updateEntity',
        payload,
      });
    },
  },

  reducers: {
    updateEntity(state, action) {
      return {
        ...state,
        entity: action.payload,
      };
    },
  },
};

export default CvDashboardModel;
