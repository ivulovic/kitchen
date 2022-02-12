import { OrderAdded, SocketStatus } from './constants';

const setupSocket = () => {
  const socket = new WebSocket('ws://localhost:8989');
  socket.onopen = () => console.log(SocketStatus.ConnectionOpened);

  socket.onmessage = event => {
    let data = JSON.parse(event.data);
    // switch (data.type) {
    //   case OrderAdded: {
    //     console.log('order added socket', data.message);
    //     // dispatch(kitchenActions.addOrder(data.message));
    //     break;
    //   }
    //   default:
    //     break;
    // }
  };
  socket.onerror = e => {
    console.log('WebSocket Error: ', e);
  };
  socket.onclose = e => {
    // send close
  };
  return socket;
};

export default setupSocket;
