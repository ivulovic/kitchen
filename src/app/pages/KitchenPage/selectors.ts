import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { KitchenScope, initialState } from './constants';

export const selectOrders = createSelector(
  [(state: RootState) => state[KitchenScope] || initialState],
  state => state.orders,
);
export const selectProducts = createSelector(
  [(state: RootState) => state[KitchenScope] || initialState],
  state => state.products,
);
