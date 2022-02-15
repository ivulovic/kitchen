import { Routes } from 'app/constants/routes';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/redux-injectors';
import { SidenavScope } from './constants';
import { selectStores } from './selectors';
import { SidePanelLink } from './SidePanelLink';
import { sidenavActions, useSidenavSlice } from './slice';
import saga from './saga';
import './style.scss';
import HomeIcon from 'app/icons/HomeIcon';
import OrderHistoryIcon from 'app/icons/OrderHistory';
import StoreIcon from 'app/icons/StoreIcon';
import ChartIcon from 'app/icons/ChartIcon';
import SettingsIcon from 'app/icons/SettingsIcon';

export function SidePanel() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useSidenavSlice();
  useInjectSaga({ key: SidenavScope, saga });
  const stores = useSelector(selectStores);
  React.useEffect(() => {
    dispatch(sidenavActions.loadStores());
  }, []);
  return (
    <div className="side-panel">
      {/* <SidePanelLink link={Routes.Home} exact label={'Home'} /> */}
      <SidePanelLink
        icon={HomeIcon}
        link={Routes.Home}
        exact
        label={t('home')}
      />
      {stores.map(store => (
        <SidePanelLink
          icon={StoreIcon}
          key={store._id}
          label={t(store.name)}
          link={`${Routes.Kitchen}/${store._id}`}
        />
      ))}
      <SidePanelLink
        icon={OrderHistoryIcon}
        link={Routes.OrderHistory}
        exact
        label={t('order History')}
      />
      <SidePanelLink
        icon={ChartIcon}
        link={Routes.Statistics}
        exact
        label={t('statistics')}
      />
      <SidePanelLink
        icon={SettingsIcon}
        link={Routes.Settings}
        exact
        label={t('settings')}
      />
    </div>
  );
}
