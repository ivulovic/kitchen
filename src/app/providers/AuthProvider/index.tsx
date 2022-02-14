import { useEffect } from 'react';
import { useInjectSaga } from 'utils/redux-injectors';
import { AuthProviderScope } from './constants';
import { authActions } from './slice';
import saga from './saga';
import { useDispatch } from 'react-redux';

export default function AuthProvider() {
  const dispatch = useDispatch();
  useInjectSaga({ key: AuthProviderScope, saga });
  useEffect(() => {
    setTimeout(() => {
      dispatch(authActions.initAuth());
    }, 0);
  }, []);
  return null;
}
