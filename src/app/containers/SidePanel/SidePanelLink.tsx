import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ISidePanelLinkProps } from './types';

export function SidePanelLink(props: ISidePanelLinkProps) {
  return (
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName="active"
      className="side-panel-link"
    >
      {props.label}
    </NavLink>
  );
}
