import { Routes } from 'app/constants/routes';
import * as React from 'react';
import { restaurants } from './data';
import { SidePanelLink } from './SidePanelLink';
import './style.scss';

export function SidePanel() {
  return (
    <div className="side-panel">
      <SidePanelLink link={Routes.Home} exact label={'Home'} />
      <SidePanelLink link={Routes.Kitchen} exact label={'Kitchen'} />
      {restaurants.map(restaurant => (
        <SidePanelLink
          key={restaurant.id}
          label={restaurant.name}
          link={`${Routes.Kitchen}/${restaurant.id}`}
        />
      ))}
    </div>
  );
}
