export interface IOverviewParams {
  restaurantId: string;
}
export interface IOverviewProps {
  sendNotification(e): void;
}
export interface IHeaderProps {
  title: string;
}

export interface IMenuItem {
  id: string;
  name: string;
  description: string;
}

export interface IMenuProps {
  data: Array<IMenuItem>;
  onAdd(itemId: string): void;
}

export interface INotificationsProps {
  data: Array<IOrderItemProps>;
}

export interface IMenuItemProps extends IMenuItem {
  onAdd(itemId: string): void;
}

export interface IMenuItemAddedNotification {
  itemId: string;
  userId: string;
  date: number;
}

export interface IOrderItemProps extends IMenuItemAddedNotification {
  
}

export interface IKitchenState {
  orders: Array<IMenuItemAddedNotification>;
}