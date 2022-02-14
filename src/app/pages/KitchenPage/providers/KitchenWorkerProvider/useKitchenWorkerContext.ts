import { useContext } from 'react';
import Context from './Context';

export default function useKitchenWorkerContext() {
  const ctx = useContext(Context);
  return ctx;
}
