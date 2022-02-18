import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useKitchenWorkerContext from '../providers/KitchenWorkerProvider/useKitchenWorkerContext';
import { IKitchenWorkerContextValue } from '../types';

type InternalDispatch = (action: any) => void;

function useKitchenDispatch(): InternalDispatch {
  const ctx = useKitchenWorkerContext();
  const dispatch = useDispatch();

  const internalDispatch = useCallback(
    (action: any): void => {
      action.meta = ctx as IKitchenWorkerContextValue;
      dispatch(action);
    },
    [dispatch, ctx],
  );
  return internalDispatch;
}

export default useKitchenDispatch;
