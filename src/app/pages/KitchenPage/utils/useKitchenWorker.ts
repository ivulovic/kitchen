import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function useKitchenWorker() {
  const [worker, setWorker] = useState<SharedWorker>();
  const dispatch = useDispatch();

  const handleStartConnection = () => {
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

  const broadcastAction = e => {
    worker?.port.postMessage(e);
    // workers sends to websocket
    // ws sends to all client's except the ones who initiated request
    // data gets dispatched in redux on other clients (worker.port.onMessage)
  };

  useEffect(() => {
    const myWorker = new SharedWorker(
      new URL('./kitchen.worker.js', import.meta.url),
    );
    setWorker(myWorker);

    return () => {
      myWorker.port.close();
    };
  }, []);

  useEffect(() => {
    if (worker) {
      handleStartConnection();
      worker.port.onmessage = function (e) {
        // console.log('[HOOK]', e.data);
        if (e.data.includes('type')) {
          const data = JSON.parse(e.data);
          if (data.type) {
            dispatch(data);
          }
        }
      };
    }
  }, [worker]);

  return [broadcastAction];
}
