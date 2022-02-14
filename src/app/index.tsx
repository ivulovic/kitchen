import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import SidePanelLayout from 'app/components/Layouts/SidePanelLayout';
import { KitchenPage } from './pages/KitchenPage';
import { Routes } from './constants/routes';
import AuthProvider from './providers/AuthProvider';
import { useSelector } from 'react-redux';
import { selectUser } from './providers/AuthProvider/selectors';
import AuthPage from './pages/AuthPage';
import { useAuthProviderSlice } from './providers/AuthProvider/slice';

export function App() {
  useAuthProviderSlice();
  const { i18n } = useTranslation();
  const user = useSelector(selectUser);
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Kitchen"
        defaultTitle="Kitchen"
        htmlAttributes={{ lang: i18n.language }}
      ></Helmet>

      <AuthProvider />

      {user ? (
        <>
          <SidePanelLayout>
            <Switch>
              <Route exact path={Routes.Home} component={KitchenPage} />
              <Route path={Routes.Kitchen} component={KitchenPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </SidePanelLayout>
        </>
      ) : (
        <Switch>
          <Route component={AuthPage} />
        </Switch>
      )}
    </BrowserRouter>
  );
}
