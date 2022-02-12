import * as React from 'react';
import { IMenuItemAddedNotification, INotificationsProps } from '../../types';
import { OrderItem } from './OrderItem';

export function Orders(props: INotificationsProps) {
  return (
    <div className="orders">
      <h1>Orders</h1>
      {props.data.map((item: IMenuItemAddedNotification) => (
        <OrderItem key={item.date} {...item} />
      ))}
    </div>
  );
}
