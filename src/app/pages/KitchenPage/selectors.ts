import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { KitchenScope, initialState } from './constants';

export const selectOrders = createSelector(
  [(state: RootState) => state[KitchenScope] || initialState],
  state => state.orders,
);
export const selectDelivery = createSelector(
  [(state: RootState) => state[KitchenScope] || initialState],
  state => state.delivery,
);
export const selectProducts = createSelector(
  [(state: RootState) => state[KitchenScope] || initialState],
  state => state.products,
);
