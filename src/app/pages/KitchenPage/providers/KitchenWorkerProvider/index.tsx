import useKitchenWorker from 'app/workers/kitchen/useKitchenWorker';
import React from 'react';
import { IKitchenWorkerProviderProps } from '../../types';
import Context from './Context';

export default function KitchenWorkerProvider(
  props: IKitchenWorkerProviderProps,
) {
  const [sendNotification] = useKitchenWorker();
  return (
    <Context.Provider
      value={{
        sendNotification,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
