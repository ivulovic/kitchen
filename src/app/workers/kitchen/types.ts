import { IOrder } from 'app/pages/KitchenPage/types';

export interface IKitchenWorkerHookProps {
  onMessage?: (e: IOrder) => void;
}
