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

export function SidePanel() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useSidenavSlice();
  useInjectSaga({ key: SidenavScope, saga });
  const stores = useSelector(selectStores);
  React.useEffect(() => {
    dispatch(sidenavActions.loadStores());
  }, [])
  return (
    <div className="side-panel">
      {/* <SidePanelLink link={Routes.Home} exact label={'Home'} /> */}
      <SidePanelLink link={Routes.Home} exact label={t('home')} />
      {stores.map(store => (
        <SidePanelLink
          key={store._id}
          label={t(store.name)}
          link={`${Routes.Kitchen}/${store._id}`}
        />
      ))}
    </div>
  );
}
