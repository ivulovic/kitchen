/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const KitchenPage = lazyLoad(
  () => import('./index'),
  module => module.KitchenPage,
);
