import Modal from 'app/components/Modal';
import useModal from 'app/components/Modal/useModal';
import { selectUser } from 'app/providers/AuthProvider/selectors';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { kitchenActions } from '../../slice';
import {
  IDeliveryCreateAction,
  IDeliveryInfoProps,
  IGroupedDelivery,
  IOverviewParams,
} from '../../types';
import useKitchenDispatch from '../../utils/useKitchenDispatch';
import DeliveryForm from '../DeliveryForm';

export function DeliveryInfo(props: IDeliveryInfoProps) {
  const { toggle, visible } = useModal();
  const { storeId } = useParams<IOverviewParams>();
  const kitchenDispatch = useKitchenDispatch();
  const user = useSelector(selectUser);
  const handleSubmit = (value: Omit<IDeliveryCreateAction, 'storeId'>) => {
    const action = delivery
      ? kitchenActions.updateDelivery
      : kitchenActions.createDelivery;
    kitchenDispatch(
      action({
        ...value,
        storeId,
        deliveryId: currentDelivery?.deliveryId,
      }),
    );
    toggle();
  };
  const handleCancelDelivery = () => {
    kitchenDispatch(
      kitchenActions.cancelDelivery({
        deliveryId: currentDelivery?.deliveryId,
      }),
    );
  };
  const groupedData = React.useMemo(() => {
    const obj = {};
    const deliveredData = props.data.filter(x => {
      if (x.isDelivered) {
        return true;
      }
    });
    props.data.forEach(x => {
      obj[x.storeId._id] = {
        people: [
          ...(obj[x.storeId._id]?.people || []),
          {
            ...x.createdBy,
            description: x.description,
            isDelivered: x.isDelivered,
            deliveryId: x._id,
          },
        ],
        store: x.storeId,
        confirmationPersons: deliveredData.map(x => x.createdBy),
      };
    });
    if (storeId) {
      if (obj[storeId]) {
        return [obj[storeId]] as Array<IGroupedDelivery>;
      }
      return [];
    }
    return Object.values(obj) as Array<IGroupedDelivery>;
  }, [props.data]);
  const delivery = React.useMemo(
    () => groupedData.find(x => x.people.find(y => y.email === user?.email)),
    [groupedData],
  );
  const currentDelivery = delivery?.people.find(x => x.email === user?.email)!;
  return (
    <div className="delivery-info">
      {groupedData.map(x => {
        const deliveryPersons = x.people.map(
          x => x.firstName + ' ' + x.lastName,
        );
        return (
          <div key={x.store._id} className="store-delivery">
            <div>
              <strong>{deliveryPersons.join(', ')}</strong> applied to do
              delivery from the <strong>{x.store.name}</strong> store.
            </div>
            <div className="store-messages">
              <div className="prewrapped-messages">
                <strong>Messages:</strong>
                {x.people.map(y => (
                  <div key={y._id} className="people-messages">
                    {y.description && (
                      <p>
                        <strong>
                          {y.firstName} {y.lastName}
                        </strong>
                        {y.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <strong>Delivery:</strong>
                {x.people.map(y => (
                  <div key={y._id} className="people-messages">
                    {y.isDelivered && (
                      <p>
                        <strong>
                          {y.firstName} {y.lastName}
                        </strong>{' '}
                        marked delivery as <strong>Done</strong>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
      {storeId && (
        <div className="footer">
          {delivery ? (
            <>
              <button className="flat-button info" onClick={toggle}>
                Update
              </button>
              <button
                className="flat-button danger"
                onClick={handleCancelDelivery}
              >
                Cancel Delivery
              </button>
            </>
          ) : (
            <>
              <div>Become a delivery person by clicking "Apply" button.</div>
              <button className="flat-button active" onClick={toggle}>
                Apply
              </button>
            </>
          )}
          {!delivery && (
            <Modal
              visible={visible}
              toggle={toggle}
              title={`Apply for delivery`}
            >
              <DeliveryForm onCancel={toggle} onSubmit={handleSubmit} />
            </Modal>
          )}
          {delivery && (
            <Modal
              visible={visible}
              toggle={toggle}
              title={`Update delivery status`}
            >
              <DeliveryForm
                onCancel={toggle}
                onSubmit={handleSubmit}
                model={{
                  description: currentDelivery.description,
                  isDelivered: currentDelivery.isDelivered,
                }}
              />
            </Modal>
          )}
        </div>
      )}
    </div>
  );
}
