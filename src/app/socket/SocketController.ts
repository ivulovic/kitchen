import setupSocket from './setupSocket';

export default class SocketController {
  static instance;

  constructor() {
    if (!SocketController.instance) {
      SocketController.instance = setupSocket();
    }
  }
}
