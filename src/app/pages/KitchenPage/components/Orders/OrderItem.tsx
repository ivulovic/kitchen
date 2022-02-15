import * as React from 'react';
import { formatDate, formatTime } from 'utils/date';
import { IOrderItemProps } from '../../types';
import { ProductCard } from '../ProductCard';

export function OrderItem(props: IOrderItemProps) {
  const createdString = `${formatDate(props.createdAt)} at ${formatTime(
    props.createdAt,
  )}`;
  const modifiedString = `${formatDate(props.modifiedAt)} at ${formatTime(
    props.modifiedAt,
  )}`;
  const [fullPortions, halfPortions] = props.quantity.split('_');
  return (
    <div className="order-item">
      <div className="order-item-header">
        <h3>
          {props.createdBy.firstName} {props.createdBy.lastName} added{' '}
          {props.productId.name}
        </h3>
        <div className="grid-2">
          <h4>Delivery: {props.delivery ? 'Yes' : 'No'}</h4>
          <h4>
            Quantity:{' '}
            {fullPortions !== '0' && `Full portions: ${fullPortions} `}
            {halfPortions !== '0' && `Half portions: ${halfPortions}`}
          </h4>
        </div>
        <p className="datetime-info">
          <span>Created: {createdString}</span>
          {createdString === modifiedString ? null : (
            <span>Updated: {modifiedString}</span>
          )}
        </p>
      </div>
      <ProductCard {...props.productId} scope="orders" status={props.status} />
      {/* <div className="history">
        <p>Marko marked this item as viewed.</p>
        <p>Marko marked this request as accepted.</p>
      </div> */}
    </div>
  );
}
