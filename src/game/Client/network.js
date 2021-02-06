import Emitter from 'events';

export default class Network {
  constructor(client, options = {}) {
    const {} = options;
    this.client = client;
    this.emitter = new Emitter();
    this.emitter.on('c', this.receive.bind(this));
  }

  /**
   * From user input, to server.
   * @param {*} data
   */
  send(data) {
    // console.log('Client: send(data)');
    this.emitter.emit('s', JSON.stringify(data));
  }

  /**
   * From server, to client.
   * @param {*} data
   */
  receive(data) {
    console.log('Client: receive(data)');
    this.client.receive(data);
  }
}
