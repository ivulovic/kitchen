import { IMenuItem } from './types';
import { IKitchenState } from './types';

export const menu: Record<string, Array<IMenuItem>> = {
  'ispod-lipe': [
    {
      id: '1.1',
      name: 'Juneca kapama',
      description: 'Bla bla bla',
    },
    {
      id: '1.2',
      name: 'Rebarca',
      description: 'Bla bla 1 bla',
    },
  ],
  ribarnica: [
    {
      id: '2.1',
      name: 'Skarpina',
      description: 'Bla bla bla',
    },
    {
      id: '2.2',
      name: 'Skusa',
      description: 'Bla bla 1 bla',
    },
  ],
};

export const KitchenScope = 'kitchen';

export const initialState: IKitchenState = {
  orders: [],
};
