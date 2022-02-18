import useKitchenWorker from 'app/pages/KitchenPage/utils/useKitchenWorker';
import React from 'react';
import { IKitchenWorkerProviderProps } from '../../types';
import Context from './Context';

export default function KitchenWorkerProvider(
  props: IKitchenWorkerProviderProps,
) {
  const [broadcastAction] = useKitchenWorker();
  return (
    <Context.Provider
      value={{
        broadcastAction,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
