import * as React from 'react';
import { IProductInfoProps } from '../../types';
import { StatusList } from '../Orders/StatusList';
import { ProductControls } from '../Products/ProductControls';

export function ProductCard(props: IProductInfoProps) {
  return (
    <div className="product-info">
      <div
        className="image"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className="product-details-wrapper">
        <div className="product-details">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
        {props.scope === 'orders' && <StatusList status={props.status} />}
        {props.scope === 'products' && <ProductControls {...props} />}
      </div>
    </div>
  );
}
