var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'onitsha/tr';

const preparedData = () => {    
    return {
        id: "onitsha",
        lines: [
            {
                id: "b1t",
                td: transmissionData(generateValues())
            },
            {
                id: "b2t",
                td: transmissionData(generateValues())
            },
            {
                id: "d3t",
                td: transmissionData(generateValues())
            },
            {
                id: "t4a",
                td: transmissionData(generateValues())
            },
            {
                id: "t3h",
                td: transmissionData(generateValues())
            },
            {
                id: "k1t",
                td: transmissionData(generateValues())
            },
            {
                id: "k2t",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const onitsha = (wss, sentTopic, message) => {
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