import { call, put, takeLatest } from 'redux-saga/effects';

import {
  request,
  makePostReq,
  makeDeleteReq,
  makeGetReq,
  makePatchReq,
} from 'utils/request';
import { kitchenActions } from './slice';

export function* getOrders() {
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
    const preparedAction = kitchenActions.createdOrder(data);
    yield put(preparedAction);
    action.meta.broadcastAction(preparedAction);
  } catch (err) {
    console.log('Error occured', err);
  }
}
export function* createDelivery(action) {
  const requestURL = `/api/delivery`;
  try {
    const data = yield call(
      request,
      requestURL,
      makePostReq(action.payload) as any,
    );
    const preparedAction = kitchenActions.createdDelivery(data);
    yield put(preparedAction);
    action.meta.broadcastAction(preparedAction);
  } catch (err) {
    console.log('Error occured', err);
  }
}
export function* updateDelivery(action) {
  const { deliveryId, description, isDelivered } = action.payload;
  const requestURL = `/api/delivery/${deliveryId}`;
  try {
    const data = yield call(
      request,
      requestURL,
      makePatchReq({
        description,
        isDelivered,
      }) as any,
    );
    const preparedAction = kitchenActions.updatedDelivery(data);
    yield put(preparedAction);
    action.meta.broadcastAction(preparedAction);
  } catch (err) {
    console.log('Error occured', err);
  }
}

export function* removeOrder(action) {
  const requestURL = `/api/order/${action.payload.orderId}`;
  try {
    const data = yield call(
      request,
      requestURL,
      makeDeleteReq(action.payload) as any,
    );
    const preparedAction = kitchenActions.removedOrder(action.payload);
    yield put(preparedAction);
    action.meta.broadcastAction(preparedAction);
  } catch (err) {
    console.log('Error occured', err);
  }
}

export function* cancelDelivery(action) {
  console.log('cancel delivery', action);
  const requestURL = `/api/delivery/${action.payload.deliveryId}`;
  try {
    yield call(request, requestURL, makeDeleteReq(action.payload) as any);
    const preparedAction = kitchenActions.canceledDelivery(action.payload);
    yield put(preparedAction);
    action.meta.broadcastAction(preparedAction);
  } catch (err) {
    console.log('Error occured', err);
  }
}

export function* getDeliveryInfo() {
  const requestURL = `/api/delivery`;
  try {
    const data = yield call(request, requestURL, makeGetReq() as any);
    yield put(kitchenActions.loadedDeliveryInfo(data));
  } catch (err) {
    console.log('Error occured', err);
  }
}

export default function* saga() {
  yield takeLatest(kitchenActions.loadOrders.type, getOrders);
  yield takeLatest(kitchenActions.loadDeliveryInfo.type, getDeliveryInfo);
  yield takeLatest(kitchenActions.createOrder.type, createOrder);
  yield takeLatest(kitchenActions.cancelDelivery.type, cancelDelivery);
  yield takeLatest(kitchenActions.createDelivery.type, createDelivery);
  yield takeLatest(kitchenActions.updateDelivery.type, updateDelivery);
  yield takeLatest(kitchenActions.removeOrder.type, removeOrder);
  yield takeLatest(kitchenActions.loadProducts.type, getProducts);
}
