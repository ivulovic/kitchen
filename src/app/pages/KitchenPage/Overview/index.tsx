import { selectUser } from 'app/providers/AuthProvider/selectors';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { menu } from '../constants';
import { IOverviewParams, IOverviewProps } from '../types';

export function Overview(props: IOverviewProps) {
  const user = useSelector(selectUser);

  const { restaurantId } = useParams<IOverviewParams>();
  const items = menu[restaurantId];
  const handleItemAdd = (itemId: string) => {
    const payload = {
      itemId: itemId,
      userId: user.username,
      date: new Date().getTime(),
    };
    props.sendNotification(payload);
  };
  return (
    <>
      <Helmet>
        <title>{restaurantId} - Kitchen</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Header title={`Today on menu in: ${restaurantId}`} />
      <Menu data={items} onAdd={handleItemAdd} />
    </>
  );
}
