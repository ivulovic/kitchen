import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { AuthProviderScope, initialState } from './constants';
import { IAuthUser } from './types';

const slice = createSlice({
  name: AuthProviderScope,
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IAuthUser>) {
      state.user = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useAuthProviderSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
