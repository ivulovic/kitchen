import * as React from 'react';
import { IMenuProps, IProduct } from '../../types';
import { ProductCard } from '../ProductCard';

export function Products(props: IMenuProps) {
  return (
    <div className="products">
      {!props.data?.length ? (
        <div className="product-info">No products in this store yet.</div>
      ) : null}
      {props.data.map((item: IProduct) => (
        <ProductCard key={item._id} {...item} scope="products" status={''} />
      ))}
    </div>
  );
}
