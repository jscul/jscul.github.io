import Emitter from 'events';

export default class Network {
  constructor(server, options = {}) {
    const {} = options;
    this.server = server;
    this.emitter = new Emitter();
    this.emitter.on('s', this.receive.bind(this));
  }

  /**
   * From game server, to game client.
   * @param {*} data
   */
  send(data) {
    // console.log('Server: send(data)');
    this.emitter.emit('c', JSON.stringify(data));
  }

  /**
   * From game client, to server.
   * @param {*} data
   */
  receive(data) {
    console.log('Server: receive(data)');
    this.server.receive(data);
  }
}
