import { kitchenActions } from 'app/pages/KitchenPage/slice';
import { OrderAdded } from 'app/socket/constants';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function useKitchenWorker() {
  const [worker, setWorker] = useState<SharedWorker>();
  const dispatch = useDispatch();

  const hanldeStartConnection = () => {
    // Send the message to the worker [postMessage]
    worker?.port.postMessage({
      connectionStatus: 'init',
    });
  };

  const handleStopConnection = () => {
    worker?.port.postMessage({
      connectionStatus: 'stop',
    });
  };

  const sendNotification = e => {
    const payload = { type: OrderAdded, payload: e };
    addOrder(e);
    // send http request
    // ...
    // send to worker
    worker?.port.postMessage(payload);
  };

  const addOrder = data => dispatch(kitchenActions.addOrder(data));

  useEffect(() => {
    const myWorker = new SharedWorker(
      new URL('./kitchen.worker.js', import.meta.url),
    ); //NEW SYNTAX
    setWorker(myWorker);

    return () => {
      myWorker.port.close();
    };
  }, []);

  useEffect(() => {
    if (worker) {
      hanldeStartConnection();
      worker.port.onmessage = function (e) {
        console.log('[HOOK]', e.data);
        if (e.data.includes('type')) {
          const data = JSON.parse(e.data);
          switch (data.type) {
            case OrderAdded:
              addOrder(data.message);
              break;
          }
        }
      };
    }
  }, [worker]);

  return [sendNotification];
}
