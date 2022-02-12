import { IMenuItemAddedNotification } from "app/pages/KitchenPage/types";

export interface IKitchenWorkerHookProps {
  onMessage?: (e: IMenuItemAddedNotification) => void;
}
