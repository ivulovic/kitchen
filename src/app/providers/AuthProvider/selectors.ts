import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { AuthProviderScope, initialState } from './constants';

export const selectUser = createSelector(
  [(state: RootState) => state[AuthProviderScope] || initialState],
  state => state.user,
);
