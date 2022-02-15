import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ISidePanelLinkProps } from './types';

export function SidePanelLink(props: ISidePanelLinkProps) {
  const Icon = props.icon || React.Fragment;
  return (
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName="active"
      className="side-panel-link"
    >
      <span className={`${props.icon ? 'icon' : ''}`}>
        <Icon width={24} height={24} />
      </span>
      <span className="text">{props.label}</span>
    </NavLink>
  );
}
