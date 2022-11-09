var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'oshogbo/tr';

const preparedData = () => {    
    return {
        id: "oshogbo",
        lines: [
            {
                id: "j1h",
                td: transmissionData(generateValues())
            },
            {
                id: "j2h",
                td: transmissionData(generateValues())
            },
            {
                id: "h3g",
                td: transmissionData(generateValues())
            },
            {
                id: "h2a",
                td: transmissionData(generateValues())
            },
            {
                id: "h1w",
                td: transmissionData(generateValues())
            },
            {
                id: "h7v",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const oshogbo = (wss, sentTopic, message) => {
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