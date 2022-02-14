import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { SidenavScope, initialState } from './constants';

export const selectStores = createSelector(
  [(state: RootState) => state[SidenavScope] || initialState],
  state => state.stores,
);
