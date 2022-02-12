import { ReactElement } from 'react';

export interface IAuthProviderProps {
  children: ReactElement;
}

export interface IAuthProviderState {
  user: IAuthUser;
}

export interface IAuthUser {
  username: string;
  firstName: string;
  lastName: string;
}
