import { selectUser } from 'app/providers/AuthProvider/selectors';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { kitchenActions } from '../../slice';
import { IGroupedOrder, INotificationsProps, IOrder } from '../../types';
import { GroupedOrderItem } from './GroupedOrderItem';
import { OrderItem } from './OrderItem';

export function Orders(props: INotificationsProps) {
  // sort by productId
  const dispatch = useDispatch();
  const user = useSelector(selectUser)!;
  const groupedData = React.useMemo(() => {
    const obj = {};
    props.data.forEach(x => {
      const [fullPortions, halfPortions] = x.quantity.split('_');
      const { delivery, description, status, _id } = x;
      obj[x.productId._id] = {
        people: [
          ...(obj[x.productId._id]?.people || []),
          {
            ...x.createdBy,
            delivery,
            orderDescription: description,
            fullPortions,
            halfPortions,
            orderStatus: status,
            orderId: _id,
          },
        ],
        product: {
          ...x.productId,
          totalFullPortions:
            (obj[x.productId._id]?.product?.totalFullPortions || 0) +
            parseInt(fullPortions, 10),
          totalFullPortionsWithDelivery:
            (obj[x.productId._id]?.product?.totalFullPortionsWithDelivery ||
              0) + (delivery ? parseInt(fullPortions, 10) : 0),
          totalHalfPortions:
            (obj[x.productId._id]?.product?.totalHalfPortions || 0) +
            parseInt(halfPortions, 10),
          totalHalfPortionsWithDelivery:
            (obj[x.productId._id]?.product?.totalHalfPortionsWithDelivery ||
              0) + (delivery ? parseInt(halfPortions, 10) : 0),
        },
      };
    });
    return Object.values(obj) as Array<IGroupedOrder>;
  }, [props.data]);

  const handleOrderRemove = (orderId: string) => {
    dispatch(kitchenActions.removeOrder({ orderId }));
  };
  return (
    <div className="orders">
      {/* {props.data.map((item: IOrder) => (
        <OrderItem key={item._id} {...item} />
      ))} */}
      {groupedData.map((order: IGroupedOrder) => (
        <GroupedOrderItem
          key={order.product._id}
          order={order}
          user={user}
          onRemoveOrder={handleOrderRemove}
        />
      ))}
    </div>
  );
}
