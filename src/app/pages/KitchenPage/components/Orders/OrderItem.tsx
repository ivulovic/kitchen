import * as React from 'react';
import { IOrderItemProps } from '../../types';

export function OrderItem(props: IOrderItemProps) {
  return (
    <div className="order-item">
      <h3>
        {props.userId} added {props.itemId} at{' '}
        {new Date(props.date).toLocaleString()}
      </h3>
      {/** if used is in delivery role */}
      <button>Mark as viewed</button>
      <span>Status: Pending | Rejected | Accepted</span>
      <div className="history">
        <p>Marko marked this item as viewed.</p>
        <p>Marko marked this request as accepted.</p>
      </div>
    </div>
  );
}
