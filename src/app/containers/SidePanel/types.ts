import { IStore } from 'app/pages/KitchenPage/types';
export interface ISidePanelLinkProps {
  link: string;
  label: string;
  exact?: boolean;
  icon?: any;
}

export interface ISidenavState {
  stores: Array<IStore>;
}
