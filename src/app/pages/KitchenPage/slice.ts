import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { KitchenScope, initialState } from './constants';
import { ICreateOrderAction, ILoadProductsAction, IOrder, IProduct } from './types';

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
    loadOrders(state) {},
    loadedOrders(state, action: PayloadAction<Array<IOrder>>) {
      state.orders = action.payload;
    },
    loadProducts(state, action: PayloadAction<ILoadProductsAction>) {},
    loadedProducts(state, action: PayloadAction<Array<IProduct>>) {
      state.products = action.payload;
    },
  },
});

export const { actions: kitchenActions, reducer } = slice;

export const useKitchenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
