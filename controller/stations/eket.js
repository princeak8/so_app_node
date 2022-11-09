var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'eketts/tv';
const ncTopic = 'eketts/status';

const preparedData = () => {    
    return {
        id: "eket",
        lines: [
            {
                id: "e22t",
                td: transmissionData(generateValues())
            },
            {
                id: "e21m",
                td: transmissionData(generateValues())
            },
            {
                id: "e22m",
                td: transmissionData(generateValues())
            }
        ]
    }
}

const ncData = () => {
    return {
        id: "eket",
        "nc": true,
    }
}

var lastData = '';

export const eket = (wss, sentTopic, message) => {
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