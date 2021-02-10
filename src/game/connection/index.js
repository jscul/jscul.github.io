import ServerNetwork from '../server/network';
import ClientNetwork from '../Client/network';

// callback is emit state from server (texture dependencies)
const server = new ServerNetwork();
const client = new ClientNetwork();
