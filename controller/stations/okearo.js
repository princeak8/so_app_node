var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'okearo/tr';

const preparedData = () => {    
    return {
        id: "okearo",
        lines: [
            {
                id: "k7w",
                td: transmissionData(generateValues())
            },
            {
                id: "k8w",
                td: transmissionData(generateValues())
            },
            {
                id: "n7k",
                td: transmissionData(generateValues())
            },
            {
                id: "n8k",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const okearo = (wss, sentTopic, message) => {
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