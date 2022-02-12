import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Orders } from '../components/Orders';
import { DeliveryInfo } from '../components/DeliveryInfo';
import { useSelector } from 'react-redux';
import { selectOrders } from '../selectors';

export function Main() {
  const orders = useSelector(selectOrders);
  return (
    <>
      <Helmet>
        <title>Kitchen</title>
        {/* <meta name="description" content="A Boilerplate application homepage" /> */}
      </Helmet>
      <Header title="Kitchen" />
      <DeliveryInfo />
      <Orders data={orders} />
    </>
  );
}
