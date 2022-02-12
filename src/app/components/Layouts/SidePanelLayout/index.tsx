import React from 'react';
import { ISidePanelProps } from './types';
import { SidePanel } from 'app/containers/SidePanel';
import './style.scss';

export default function SidePanelLayout(props: ISidePanelProps): JSX.Element {
  return (
    <div className="side-panel-layout">
      <div className="panel">
        <SidePanel />
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}
