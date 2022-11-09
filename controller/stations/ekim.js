var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'ekimts/tv';
const ncTopic = 'ekimts/status';

const preparedData = () => {    
    return {
        id: "ekim",
        lines: [
            {
                id: "ek1m",
                td: transmissionData(generateValues())
            }
        ]
    }
}

const ncData = () => {
    return {
        id: "ekim",
        "nc": true,
    }
}

var lastData = '';

export const ekim = (wss, sentTopic, message) => {
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