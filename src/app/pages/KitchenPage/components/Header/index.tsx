import * as React from 'react';
import { IHeaderProps } from '../../types';

export function Header(props: IHeaderProps) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}
