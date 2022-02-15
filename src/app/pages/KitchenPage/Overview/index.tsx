import { selectUser } from 'app/providers/AuthProvider/selectors';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DeliveryForm from '../components/DeliveryForm';
import { DeliveryInfo } from '../components/DeliveryInfo';
import { Header } from '../components/Header';
import { Products } from '../components/Products';
import useKitchenWorkerContext from '../providers/KitchenWorkerProvider/useKitchenWorkerContext';
import { selectDelivery, selectProducts } from '../selectors';
import { kitchenActions } from '../slice';
import { IOverviewParams, IOverviewProps } from '../types';

export function Overview(props: IOverviewProps) {
  // const user = useSelector(selectUser);
  // const { sendNotification } = useKitchenWorkerContext();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { storeId } = useParams<IOverviewParams>();
  const products = useSelector(selectProducts);
  const delivery = useSelector(selectDelivery);
  const handleItemAdd = (itemId: string) => {
    // const payload = {
    //   itemId: itemId,
    //   userId: user.username,
    //   date: new Date().getTime(),
    // };
    // sendNotification(payload);
  };
  React.useEffect(() => {
    dispatch(kitchenActions.loadProducts({ storeId }));
    dispatch(kitchenActions.loadDeliveryInfo());
  }, [storeId]);
  return (
    <>
      <Helmet>{/* <title>{t(storeId)}</title> */}</Helmet>

      <Header title={t('kitchenOverviewTitle')} />
      <DeliveryInfo data={delivery} />
      <Products data={products} onAdd={handleItemAdd} />
    </>
  );
}
