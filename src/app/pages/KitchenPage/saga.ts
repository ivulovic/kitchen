import { call, put, takeLatest } from 'redux-saga/effects';

import { request, makePostReq, makeDeleteReq, makeGetReq } from 'utils/request';
import { kitchenActions } from './slice';

/**
 * Github repos request/response handler
 */
export function* getWishlists() {
  const requestURL = `/api/order`;
  try {
    const data = yield call(request, requestURL, makeGetReq() as any);
    yield put(kitchenActions.loadedOrders(data));
  } catch (err) {
    console.log('Error occured', err);
  }
}

export function* getProducts(action) {
  const requestURL = `/api/product/${action.payload.storeId}`;
  try {
    const data = yield call(request, requestURL, makeGetReq() as any);
    yield put(kitchenActions.loadedProducts(data));
  } catch (err) {
    console.log('Error occured', err);
  }
}

export function* createOrder(action) {
  const requestURL = `/api/order`;
  try {
    const data = yield call(
      request,
      requestURL,
      makePostReq(action.payload) as any,
    );
    yield put(kitchenActions.createdOrder(data));
  } catch (err) {
    console.log('Error occured', err);
  }
}

export default function* saga() {
  yield takeLatest(kitchenActions.loadOrders.type, getWishlists);
  yield takeLatest(kitchenActions.createOrder.type, createOrder);
  yield takeLatest(kitchenActions.loadProducts.type, getProducts);
}
