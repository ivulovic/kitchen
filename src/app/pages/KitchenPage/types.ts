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

export interface IDeliveryInfoProps {
  data: Array<IDelivery>;
}

export interface IMenuItemProps extends IProduct {
  onAdd(itemId: string): void;
}

export interface IOrderItemProps extends IOrder {}

export interface IKitchenState {
  orders: Array<IOrder>;
  products: Array<IProduct>;
  delivery: Array<IDelivery>;
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
  quantity: string;
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
}

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

export interface GroupedOrderPerson extends IUser {
  delivery: boolean;
  orderDescription: string;
  fullPortions: string;
  halfPortions: string;
  orderStatus: string;
  orderId: string;
}
export interface IGroupedOrder {
  product: IGroupedProduct;
  people: Array<GroupedOrderPerson>;
}

export interface IGroupedOrder {
  product: IGroupedProduct;
  people: Array<GroupedOrderPerson>;
}

export interface IGroupedProduct extends IProduct {
  totalFullPortions: number;
  totalHalfPortions: number;
  totalFullPortionsWithDelivery: number;
  totalHalfPortionsWithDelivery: number;
}
export interface IGroupedOrderItemProps {
  order: IGroupedOrder;
  user: IUser;
  onRemoveOrder(orderId: string): void;
}

export interface IRemoveOrderAction {
  orderId: string;
}

export interface IDelivery {
  _id: string;
  storeId: IStore;
  description: string;
  createdBy: IUser;
  isDelivered: boolean;
}

export interface ILoadedDeliveryInfo {}

export interface IGroupedDeliveryPerson extends IUser {
  description: string;
  isDelivered: boolean;
  deliveryId: string;
}

export interface IGroupedDelivery {
  store: IStore;
  people: Array<IGroupedDeliveryPerson>;
  confirmationPersons: Array<IUser>;
}

export interface IDeliveryCreateAction {
  isDelivered: boolean;
  description: string;
  storeId: string;
  deliveryId?: string;
}

export interface IDeliveryCancelAction {
  deliveryId: string;
}

export interface IDeliveryFormProps {
  model?: Omit<IDeliveryCreateAction, 'storeId'>;
  onCancel(): void;
  onSubmit(v: Omit<IDeliveryCreateAction, 'storeId'>): void;
}
