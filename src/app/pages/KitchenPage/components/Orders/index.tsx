import * as React from 'react';
import { INotificationsProps, IOrder } from '../../types';
import { OrderItem } from './OrderItem';

export function Orders(props: INotificationsProps) {
  return (
    <div className="orders">
      {props.data.map((item: IOrder) => (
        <OrderItem key={item._id} {...item} />
      ))}
    </div>
  );
}
