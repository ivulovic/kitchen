import { IKitchenState } from './types';

export const KitchenScope = 'kitchen';

export const initialState: IKitchenState = {
  orders: [],
  products: [],
};

// export enum ActionMode {
//   Create = 'Create',
//   Update = 'Update',
// }
