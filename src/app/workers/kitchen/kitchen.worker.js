// const createSocketInstance = () => {
//   const socket = new WebSocket('ws://localhost:8989');
//   return socket;
// }

// const ports = [];
// // eslint-disable-next-line no-restricted-globals
// self.onconnect = function (e) {
//   var port = e.ports[0];
//   ports.push(port);

//   port.onmessage = function (e) {

//     // var workerResult = e.data;
//     // SocketController.instance.send(payload(OrderAdded, workerResult));
//     // console.log('on message in kitchen worker', e.data);
//     // for (var i = 0; i < ports.length; i++) {
//     //   ports[i].postMessage(workerResult);
//     // }
//   };
// };

const ports = [];

// eslint-disable-next-line no-restricted-globals
self.onconnect = function (e) {
  let socketInstance = null;
  const port = e.ports[0];
  ports.push(port);

  function createSocketInstance() {
    let socket = new WebSocket('ws://localhost:8989');

    return socket;
  }

  function socketManagement() {
    if (socketInstance) {
      socketInstance.onopen = function (e) {
        console.log('[open] Connection established');
        port.postMessage('[SOCKET] Connection established');
        socketInstance.send(JSON.stringify({ socketStatus: true }));
      };

      socketInstance.onmessage = function (event) {
        console.log(`[message] Data received from server: ${event.data}`);
        port.postMessage(event.data);
      };

      socketInstance.onclose = function (event) {
        if (event.wasClean) {
          console.log(`[close] Connection closed cleanly, code=${event.code}`);
          port.postMessage(
            `[SOCKET] Connection closed cleanly, code=${event.code}`,
          );
        } else {
          // e.g. server process killed or network down
          // event.code is usually 1006 in this case
          console.log('[close] Connection died');
          port.postMessage('[SOCKET] Connection died');
        }
      };

      socketInstance.onerror = function (error) {
        console.log(`[error] ${error.message}`);
        port.postMessage(`[SOCKET] ${error.message}`);
        socketInstance.close();
      };
    }
  }

  port.onmessage = function (event) {
    const workerData = event.data;
    console.log(workerData);
    port.postMessage('[WORKER] Shared worker onmessage established');
    switch (workerData.connectionStatus) {
      case 'init':
        socketInstance = createSocketInstance();
        socketManagement();
        break;

      case 'stop':
        socketInstance.close();
        break;

      default:
        break;
    }
    switch (workerData.type) {
      case undefined:
        break;
      default:
        socketInstance.send(JSON.stringify(workerData));
        break;
    }
  };
};
