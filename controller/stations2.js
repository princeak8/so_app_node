import {
    asaba, afamViGs, deltaGs, jebbaGs, eket, ekim, kainji, ikotEkpene, okpaiGs, odukpaniGs, phMain, transamadiGs
} from './stations/index';
import { sendMessage } from '../utilities';

const send = (wss, client) => {
    client.on('message', async function (sentTopic, message) {
        asaba(wss, sentTopic, message);
        afamViGs(wss, sentTopic, message);
        deltaGs(wss, sentTopic, message);
        jebbaGs(wss, sentTopic, message);
        okpaiGs(wss, sentTopic, message);

        ekim(wss, sentTopic, message);

        kainji(wss, sentTopic, message);
        ikotEkpene(wss, sentTopic, message);
        odukpaniGs(wss, sentTopic, message);
        phMain(wss, sentTopic, message);
        transamadiGs(wss, sentTopic, message);

        // wss.clients.forEach((wsClient) => {
        //     //console.log('client ready');
        //     if (wsClient.readyState === WebSocket.OPEN) {
        //         const vals = message.toString();
        //         // console.log(vals);
        //         wsClient.send(vals);
        //     }
        // });
        // sendMessage(wss, message);
    });
}

export default send;

