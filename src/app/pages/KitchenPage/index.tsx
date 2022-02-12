import useKitchenWorker from 'app/workers/kitchen/useKitchenWorker';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Main } from './Main';
import { Overview } from './Overview';
import { useKitchenSlice } from './slice';
import './style.scss';

export function KitchenPage() {
  let { url } = useRouteMatch();
  useKitchenSlice();
  const [sendNotification] = useKitchenWorker();
  return (
    <>
      <Helmet>
        <title>Kitchen</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="kitchen">
        <Switch>
          <Route exact path={url} component={Main} />
          <Route
            path={`${url}/:restaurantId`}
            render={p => (
              <Overview {...p} sendNotification={sendNotification} />
            )}
          />
        </Switch>
      </div>
    </>
  );
}
