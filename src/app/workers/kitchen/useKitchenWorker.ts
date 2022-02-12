import { kitchenActions } from 'app/pages/KitchenPage/slice';
import { IMenuItemAddedNotification } from 'app/pages/KitchenPage/types';
import { OrderAdded, payload } from 'app/socket/constants';
import SocketController from 'app/socket/SocketController';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IKitchenWorkerHookProps } from './types';

// export default function useKitchenWorker(params?: IKitchenWorkerHookProps) {
//   let worker = useRef<SharedWorker>();
//   // const dispatch = useDispatch();
//   useEffect(() => {
//     if (!window.SharedWorker || worker.current) {
//       return;
//     }
//     const w = new SharedWorker(new URL('./kitchen.worker.js', import.meta.url));
//     w.port.addEventListener('message', function (e) {
//       console.log('[MESSAGE]', e.data);
//       // console.log('message', e.data, SocketController.instance);
//       // params?.onMessage?.(e.data);
//       // dispatch(kitchenActions.addOrder(e.data));
//       // SocketController.instance.send(payload(OrderAdded, e.data));
//     });
//     w.port.start();
//     worker.current = w;
//     return () => {
//       w.port.close();
//       w.port.removeEventListener('message', () => {});
//     };
//   }, []);

//   const sendNotification = (e: IMenuItemAddedNotification) => {
//     if (worker.current) {
//       // send to current tab
//       // dispatch(kitchenActions.addOrder(e));
//       // send to tabs
//       worker.current.port.postMessage(e);
//       // send to other browsers
//       // SocketController.instance.send(payload(OrderAdded, e));
//     }
//   };

//   return [sendNotification];
// }

export default function useKitchenWorker() {
  const [worker, setWorker] = useState<SharedWorker>();
  const dispatch = useDispatch();
  const [res, setRes] = useState([]);
  const [log, setLog] = useState([]);

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
    worker?.port.postMessage({ type: OrderAdded, payload: e });
  };

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
              dispatch(kitchenActions.addOrder(data.message));
          }
        }
        // if (typeof e.data === 'string') {
        //   if (e.data.includes('[')) {
        //     setLog(preLogs => [...preLogs, e.data]);
        //   } else {
        //     setRes(prevRes => [...prevRes, { stockPrice: e.data }]);
        //   }
        // }

        // if (typeof e.data === 'object') {
        //   setButtonState(e.data.disableStartButton);
        // }
      };
    }
  }, [worker]);

  return [sendNotification];
}
