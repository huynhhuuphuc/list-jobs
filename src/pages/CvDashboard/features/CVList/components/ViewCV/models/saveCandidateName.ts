import type { Effect, Reducer } from 'umi';

const namespace = 'candidateName';

export interface CandidateNameModelState {
  entity: Record<string, any>;
}

export const CandidateNameActions = {
  SAVE_CANDIDATE_NAME: `${namespace}/saveCandidateName`,
};

export interface CandidateNameModelType {
  namespace: string;
  state: CandidateNameModelState;
  effects: {
    saveCandidateName: Effect;
  };
  reducers: {
    updateEntity: Reducer<CandidateNameModelState>;
  };
}

const CandidateNameModel: CandidateNameModelType = {
  namespace: namespace,

  state: {
    entity: {},
  },

  effects: {
    *saveCandidateName({ payload }, { put }) {
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

export default CandidateNameModel;
