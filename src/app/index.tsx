import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import SidePanelLayout from 'app/components/Layouts/SidePanelLayout';
import { KitchenPage } from './pages/KitchenPage';
import { Routes } from './constants/routes';
import AuthProvider from './providers/AuthProvider';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Kitchen"
        defaultTitle="Kitchen"
        htmlAttributes={{ lang: i18n.language }}
      ></Helmet>

      <AuthProvider>
        <SidePanelLayout>
          <Switch>
            <Route exact path={Routes.Home} component={KitchenPage} />
            <Route path={Routes.Kitchen} component={KitchenPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </SidePanelLayout>
      </AuthProvider>
    </BrowserRouter>
  );
}
