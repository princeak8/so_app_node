var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'kaduna/tr';

const preparedData = () => {    
    return {
        id: "kaduna",
        lines: [
            {
                id: "r1m",
                td: transmissionData(generateValues())
            },
            {
                id: "r2m",
                td: transmissionData(generateValues())
            },
            {
                id: "m6n",
                td: transmissionData(generateValues())
            },
            {
                id: "m2s",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const kaduna = (wss, sentTopic, message) => {
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