import {
    asaba, deltaGs, jebbaGs, eket, ekim, kainji
} from './stations/index';

const send = (wss, client) => {
    asaba(wss, client);
    deltaGs(wss, client);
    jebbaGs(wss, client);
    // eket(wss, client);
    // ekim(wss, client);
    kainji(wss, client);
}

export default send;

