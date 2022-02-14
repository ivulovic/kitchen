import { call, put, takeLatest } from 'redux-saga/effects';

import { request, makeGetReq } from 'utils/request';
import { sidenavActions } from './slice';

/**
 * Github repos request/response handler
 */
export function* getStores() {
  const requestURL = `/api/store`;
  try {
    const data = yield call(request, requestURL, makeGetReq() as any);
    yield put(sidenavActions.loadedStores(data));
  } catch (err) {
    console.log('Error occured', err);
  }
}

export default function* saga() {
  yield takeLatest(sidenavActions.loadStores.type, getStores);
}
