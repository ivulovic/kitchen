import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Orders } from '../components/Orders';
// import { DeliveryInfo } from '../components/DeliveryInfo';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrders } from '../selectors';
import { useTranslation } from 'react-i18next';
import { kitchenActions } from '../slice';

export function Main() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  React.useEffect(() => {
    dispatch(kitchenActions.loadOrders());
  }, []);
  return (
    <>
      <Helmet>
        <title>{t('home')}</title>
        {/* <meta name="description" content="A Boilerplate application homepage" /> */}
      </Helmet>
      <Header title={t('kitchenMainTitle')} />
      {/* <DeliveryInfo /> */}
      <Orders data={orders} />
    </>
  );
}
