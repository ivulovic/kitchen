import { IUser } from 'app/pages/KitchenPage/types';

export interface IAuthProviderState {
  user: IUser | null;
  initializedAuth: boolean;
  isAuthenticated: boolean;
}
