import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useInjectSaga } from 'utils/redux-injectors';
import { KitchenScope } from './constants';
import { Main } from './Main';
import { Overview } from './Overview';
import KitchenWorkerProvider from './providers/KitchenWorkerProvider';
import saga from './saga';
import { useKitchenSlice } from './slice';
import './style.scss';

export function KitchenPage() {
  const { t } = useTranslation();
  let { url } = useRouteMatch();
  useKitchenSlice();
  useInjectSaga({ key: KitchenScope, saga });

  return (
    <KitchenWorkerProvider>
      <>
        <Helmet>
          <title>{t('home')}</title>
        </Helmet>
        <div className="kitchen">
          <Switch>
            <Route exact path={url} component={Main} />
            <Route path={`${url}/:storeId`} component={Overview} />
            <Route path={`${url}/:storeId`} component={Overview} />
          </Switch>
        </div>
      </>
    </KitchenWorkerProvider>
  );
}
