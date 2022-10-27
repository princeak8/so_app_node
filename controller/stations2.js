import {
    asaba, deltaGs
} from './stations/index';

const send = (wss, client) => {
    asaba(wss, client);
    deltaGs(wss, client);
}

export default send;

