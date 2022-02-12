import * as React from 'react';
import { IMenuItemProps } from '../../types';

export function MenuItem(props: IMenuItemProps) {
  const handleAdd = () => props.onAdd(props.id);
  return (
    <div className="menu-item">
      <h1>{props.name}</h1>
      <button onClick={handleAdd}>Add to your menu</button>
      <span>Kolicina 1/2 | 1, custom -------- </span>
      <span>Za poneti | Za tamo</span>
    </div>
  );
}
