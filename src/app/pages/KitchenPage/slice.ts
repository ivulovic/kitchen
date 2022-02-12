import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { KitchenScope, initialState } from './constants';
import { IMenuItemAddedNotification } from './types';

const slice = createSlice({
  name: KitchenScope,
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<IMenuItemAddedNotification>) {
      state.orders = [...state.orders, action.payload];
    },
  },
});

export const { actions: kitchenActions, reducer } = slice;

export const useKitchenSlice = () => {
  console.log("kitchen slice injected")
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
