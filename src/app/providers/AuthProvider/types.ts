export interface IAuthProviderState {
  user: IAuthUser | null;
  initializedAuth: boolean;
  isAuthenticated: boolean;
}

export interface IAuthUser {
  username: string;
  firstName: string;
  lastName: string;
}
