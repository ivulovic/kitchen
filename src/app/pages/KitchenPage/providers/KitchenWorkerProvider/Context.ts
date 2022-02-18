import React from 'react';
import { IKitchenWorkerContextValue } from '../../types';

const initialValue = {
  broadcastAction: (e: string) => null,
};

const Context = React.createContext<IKitchenWorkerContextValue>(initialValue);

export default Context;
