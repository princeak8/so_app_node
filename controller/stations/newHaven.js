var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'newHaven/tr';

const preparedData = () => {    
    return {
        id: "newHaven",
        lines: [
            {
                id: "h1u",
                td: transmissionData(generateValues())
            },
            {
                id: "h2u",
                td: transmissionData(generateValues())
            },
            {
                id: "t3h",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const newHaven = (wss, sentTopic, message) => {
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