import React from 'react';
import { useAuthProviderSlice } from './slice';
import { IAuthProviderProps } from './types';

export default function AuthProvider(props: IAuthProviderProps) {
  useAuthProviderSlice();
  return <>{props.children}</>;
}
