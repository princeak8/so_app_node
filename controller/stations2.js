import {
    asaba, afamViGs, deltaGs, jebbaGs, eket, ekim, kainji, ikotEkpene, okpaiGs, odukpaniGs, phMain
} from './stations/index';

const send = (wss, client) => {
    client.on('message', async function (sentTopic, message) {
        asaba(wss, sentTopic, message);
        afamViGs(wss, sentTopic, message);
        deltaGs(wss, sentTopic, message);
        jebbaGs(wss, sentTopic, message);
        okpaiGs(wss, sentTopic, message);
        // ekim(wss, sentTopic, message);
        kainji(wss, sentTopic, message);
        ikotEkpene(wss, sentTopic, message);
        odukpaniGs(wss, sentTopic, message);
        phMain(wss, sentTopic, message);
    });
}

export default send;

