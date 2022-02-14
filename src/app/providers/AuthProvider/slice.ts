import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { AuthProviderScope, initialState } from './constants';

const slice = createSlice({
  name: AuthProviderScope,
  initialState,
  reducers: {
    initAuth(state) {},
    login(state, action: PayloadAction<any>) {},
    register(state, action: PayloadAction<any>) {},
    successfulLogin(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.initializedAuth = true;
      state.isAuthenticated = true;
      // state.isSuperUser = action.payload.role === "ADMIN",
    },
    logoutUser(state) {
      return initialState;
    },
    changeUserStatus(state, action: PayloadAction<any>) {},
  },
});

export const { actions: authActions, reducer } = slice;

export const useAuthProviderSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
