export const payload = (type: string, payload?: any) => {
  return JSON.stringify({
    type,
    payload,
  });
};

export enum SocketStatus {
  ConnectionOpened = 'ConnectionOpened',
}

export const OrderAdded = 'OrderAdded';
