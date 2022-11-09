var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'shiroroGs/tr';

const preparedData = () => {    
    return {
        id: "shiroroGs",
        lines: [
            {
                id: "j3r",
                td: transmissionData(generateValues())
            },
            {
                id: "j7r",
                td: transmissionData(generateValues())
            },
            {
                id: "r1m",
                td: transmissionData(generateValues())
            },
            {
                id: "r4b",
                td: transmissionData(generateValues())
            },
            {
                id: "r2m",
                td: transmissionData(generateValues())
            },
            {
                id: "r5g",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const shiroroGs = (wss, sentTopic, message) => {
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