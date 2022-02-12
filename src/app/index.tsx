/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { HomePage } from './pages/HomePage/Loadable';
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
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <AuthProvider>
        <SidePanelLayout>
          <Switch>
            <Route exact path={Routes.Home} component={HomePage} />
            <Route path={Routes.Kitchen} component={KitchenPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </SidePanelLayout>
      </AuthProvider>
    </BrowserRouter>
  );
}
