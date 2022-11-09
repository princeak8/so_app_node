var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'alaoji/tr';

const preparedData = () => {
    return {
        id: "alaoji",
        lines: [
            {
                id: "l7a",
                td: transmissionData(generateValues())
            },
            {
                id: "l8a",
                td: transmissionData(generateValues())
            },
            {
                id: "t4a",
                td: transmissionData(generateValues())
            },
            {
                id: "f1a",
                td: transmissionData(generateValues())
            },
            {
                id: "f2a",
                td: transmissionData(generateValues())
            },
            {
                id: "a1k",
                td: transmissionData(generateValues())
            },
            {
                id: "a2k",
                td: transmissionData(generateValues())
            },
            {
                id: "a23w",
                td: transmissionData(generateValues())
            },
            {
                id: "a24w",
                td: transmissionData(generateValues())
            },
            {
                id: "a23b",
                td: transmissionData(generateValues())
            },
            {
                id: "a26b",
                td: transmissionData(generateValues())
            },
        ]
    }
};

export const alaoji = (wss, sentTopic, message) => {
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