import { IAuthProviderState } from './types';

export const AuthProviderScope = 'auth';

const getFakeData = (): Array<string> => {
  let username = localStorage.getItem('username');
  let firstName = localStorage.getItem('firstName');
  let lastName = localStorage.getItem('lastName');

  const randomNumber = Math.random().toFixed(4);

  let generatedUsername = `username:${randomNumber}`;
  let generatedFirstName = `firstName:${randomNumber}`;
  let generatedLastName = `lastName:${randomNumber}`;

  if (!username) {
    username = generatedUsername;
    localStorage.setItem('username', generatedUsername);
  }
  if (!firstName) {
    firstName = generatedFirstName;
    localStorage.setItem('firstName', generatedFirstName);
  }
  if (!lastName) {
    lastName = generatedLastName;
    localStorage.setItem('lastName', generatedLastName);
  }
  return [username, firstName, lastName];
};

const [username, firstName, lastName] = getFakeData();

export const initialState: IAuthProviderState = {
  initializedAuth: false,
  isAuthenticated: false,
  user: null,
  // user: {
  //   username,
  //   firstName,
  //   lastName,
  // },
};
