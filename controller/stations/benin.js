var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'benin/tr';

const preparedData = () => {
    return {
        id: "benin",
        lines: [
            {
                id: "v7b",
                td: transmissionData(generateValues())
            },
            {
                id: "b5m",
                td: transmissionData(generateValues())
            },
            {
                id: "b6n",
                td: transmissionData(generateValues())
            },
            {
                id: "g3b",
                td: transmissionData(generateValues())
            },
            {
                id: "s3b",
                td: transmissionData(generateValues())
            },
            {
                id: "s4b",
                td: transmissionData(generateValues())
            },
            {
                id: "s5b",
                td: transmissionData(generateValues())
            },
            {
                id: "b11j",
                td: transmissionData(generateValues())
            },
            {
                id: "b12j",
                td: transmissionData(generateValues())
            },
            {
                id: "b1t",
                td: transmissionData(generateValues())
            },
            {
                id: "b2t",
                td: transmissionData(generateValues())
            },{
                id: "b3d",
                td: transmissionData(generateValues())
            }
        ]
    }
};

export const benin = (wss, sentTopic, message) => {
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
