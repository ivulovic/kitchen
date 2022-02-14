import { PayloadAction } from '@reduxjs/toolkit';
import { IStore } from 'app/pages/KitchenPage/types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { SidenavScope, initialState } from './constants';

const slice = createSlice({
  name: SidenavScope,
  initialState,
  reducers: {
    loadStores(state) {},
    loadedStores(state, action: PayloadAction<Array<IStore>>) {
      state.stores = action.payload;
    },
  },
});

export const { actions: sidenavActions, reducer } = slice;

export const useSidenavSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
