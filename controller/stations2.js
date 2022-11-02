import {
    asaba, deltaGs, jebbaGs, eket, ekim, kainji, ikotEkpene
} from './stations/index';

const send = (wss, client) => {
    asaba(wss, client);
    deltaGs(wss, client);
    jebbaGs(wss, client);
    // eket(wss, client);
    // ekim(wss, client);
    kainji(wss, client);
    ikotEkpene(wss, client);
}

export default send;

