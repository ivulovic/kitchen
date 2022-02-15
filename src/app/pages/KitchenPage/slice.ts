import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { KitchenScope, initialState } from './constants';
import {
  ICreateOrderAction,
  IDelivery,
  IDeliveryCancelAction,
  IDeliveryCreateAction,
  ILoadProductsAction,
  IOrder,
  IProduct,
  IRemoveOrderAction,
} from './types';

const slice = createSlice({
  name: KitchenScope,
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<IOrder>) {
      state.orders = [...state.orders, action.payload];
    },
    createOrder(state, action: PayloadAction<ICreateOrderAction>) {},
    createdOrder(state, action: PayloadAction<IOrder>) {
      state.orders = [...state.orders, action.payload];
    },
    createDelivery(state, action: PayloadAction<IDeliveryCreateAction>) {},
    createdDelivery(state, action: PayloadAction<IDelivery>) {
      state.delivery = [...state.delivery, action.payload];
    },
    updateDelivery(state, action: PayloadAction<IDeliveryCreateAction>) {},
    updatedDelivery(state, action: PayloadAction<IDelivery>) {
      state.delivery = state.delivery.map(x =>
        x._id === action.payload._id ? { ...x, ...action.payload } : x,
      );
    },
    cancelDelivery(state, action: PayloadAction<IDeliveryCancelAction>) {},
    canceledDelivery(state, action: PayloadAction<IDeliveryCancelAction>) {
      state.delivery = state.delivery.filter(
        x => x._id !== action.payload.deliveryId,
      );
    },
    removeOrder(state, action: PayloadAction<IRemoveOrderAction>) {},
    removedOrder(state, action: PayloadAction<IRemoveOrderAction>) {
      state.orders = state.orders.filter(x => x._id !== action.payload.orderId);
    },
    loadOrders(state) {},
    loadedOrders(state, action: PayloadAction<Array<IOrder>>) {
      state.orders = action.payload;
    },
    loadProducts(state, action: PayloadAction<ILoadProductsAction>) {},
    loadedProducts(state, action: PayloadAction<Array<IProduct>>) {
      state.products = action.payload;
    },
    loadDeliveryInfo(state) {},
    loadedDeliveryInfo(state, action: PayloadAction<Array<IDelivery>>) {
      state.delivery = action.payload;
    },
  },
});

export const { actions: kitchenActions, reducer } = slice;

export const useKitchenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
