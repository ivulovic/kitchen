import React from 'react';

export interface IOverviewParams {
  storeId: string;
}
export interface IOverviewProps {}
export interface IHeaderProps {
  title: string;
}

export interface IMenuProps {
  data: Array<IProduct>;
  onAdd(itemId: string): void;
}

export interface INotificationsProps {
  data: Array<IOrderItemProps>;
}

export interface IMenuItemProps extends IProduct {
  onAdd(itemId: string): void;
}

export interface IOrderItemProps extends IOrder {}

export interface IKitchenState {
  orders: Array<IOrder>;
  products: Array<IProduct>;
}
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
}

export interface IStore {
  _id: string;
  name: string;
  description: string;
}

export interface IProduct {
  _id: string;
  name: string;
  storeId: IStore;
  imageUrl: string;
  description: string;
}
export interface IOrder {
  _id: string;
  createdAt: number;
  createdBy: IUser;
  delivery: boolean;
  status: string;
  description: string;
  modifiedAt: number;
  productId: IProduct;
}

export interface IStatusListProps {
  status: string;
}

export interface IKitchenWorkerProviderProps {
  children: React.ReactElement;
}

export interface IKitchenWorkerContextValue {
  sendNotification(e: any): void;
}

export interface ILoadProductsAction {
  storeId: string;
};

export interface IProductInfoProps extends IProduct {
  scope: string;
  status: string;
}

export interface IProductFormProps extends IProduct {
  onSubmit(payload: ICreateOrderAction): void;
  onCancel(): void;
}

export interface ICreateOrderAction {
  productId: string;
  delivery: boolean;
  quantity: string;
  description: string;
}