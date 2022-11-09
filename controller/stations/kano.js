var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'kano/tr';

const preparedData = () => {    return {
        id: "kano",
        lines: [
            {
                id: "m6n",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const kano = (wss, sentTopic, message) => {
    //console.log('message from mqtt: ', message.toString());
    wss.clients.forEach((wsClient) => {
        //console.log('client ready');
        if (wsClient.readyState === WebSocket.OPEN) {
            message = sanitizeData(message, sentTopic);
            //wsData = [data];
            const vals = message.toString();
            // console.log(vals);
            wsClient.send(vals);
        }
    });
};

const sanitizeData = (message, topic) => {
    // if(topic == ncTopic) {
    //     if(lastData == '') {
    //         message = ncData;
    //     }else{
    //         lastData["nc"] = true;
    //         message = lastData;
    //     }
    // }else{
    //     lastData = message;
    // }
    return message;
}