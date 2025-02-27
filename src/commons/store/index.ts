import { AppConfigModelActions, getDvaApp } from 'umi';

const setShowLoading = () => {
  const numProcess = getDvaApp()?._store?.getState()?.appConfig?.loading?.numLoadingProcess || 0;
  getDvaApp()?._store.dispatch({
    type: AppConfigModelActions.SET_NUM_LOADING,
    payload: numProcess + 1,
  });
  getDvaApp()?._store.dispatch({
    type: '@@DVA_LOADING/SHOW',
    payload: {
      loading: { global: true },
    },
  });
};

const setHideLoading = () => {
  let numProcess = getDvaApp()?._store?.getState()?.appConfig?.loading?.numLoadingProcess || 0;
  numProcess -= 1;
  if (numProcess <= 0) {
    numProcess = 0;
  }
  getDvaApp()?._store.dispatch({
    type: AppConfigModelActions.SET_NUM_LOADING,
    payload: numProcess,
  });
  if (numProcess == 0) {
    getDvaApp()?._store.dispatch({
      type: '@@DVA_LOADING/HIDE',
      payload: {
        loading: { global: false },
      },
    });
  }
};

export { setShowLoading, setHideLoading };
