import * as React from 'react';
import { IMenuItem, IMenuProps } from '../../types';
import { MenuItem } from './MenuItem';

export function Menu(props: IMenuProps) {
  return (
    <div className="menu">
      {props.data.map((item: IMenuItem) => (
        <MenuItem key={item.id} {...item} onAdd={props.onAdd} />
      ))}
    </div>
  );
}
