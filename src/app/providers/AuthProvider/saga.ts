import { call, put, takeLatest } from 'redux-saga/effects';

import { request, makePostReq, makeGetReq } from 'utils/request';
import { getUserAuthToken, updateUserAuthToken } from './authCookieUtil';
import { authActions } from './slice';

export function* resolveLogin(action) {
  try {
    const { payload } = action;
    const content = yield call(
      request,
      '/auth/account/login',
      makePostReq(payload) as any,
    );
    if (content && content.status !== 404) {
      yield put(authActions.successfulLogin(content));
    }
  } catch (e) {}
}

function* resolveRegister(action) {
  try {
    const { payload } = action;
    yield call(request, '/auth/account/register', makePostReq(payload) as any);
    yield put(
      authActions.login({ email: payload.email, password: payload.password }),
    );
  } catch (e) {}
}

export function* setupAuthProvider() {
  try {
    const res = yield call(request, '/auth/account/info', makeGetReq() as any);
    yield put(authActions.successfulLogin(res));
  } catch (e) {
    const token = getUserAuthToken();
    if (token) {
      updateUserAuthToken(token);
      try {
        const res = yield call(
          request,
          '/auth/account/info',
          makeGetReq() as any,
        );
        yield put(authActions.successfulLogin(res));
      } catch (e: any) {
        if (!e.response.ok) {
          yield put(authActions.logoutUser());
        }
      }
      return;
    }
  }
}

export default function* saga() {
  yield takeLatest(authActions.login.type, resolveLogin);
  yield takeLatest(authActions.register.type, resolveRegister);
  yield takeLatest(authActions.initAuth.type, setupAuthProvider);
}
