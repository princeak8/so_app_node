var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'itu/tr';

const preparedData = () => {    
    return {
        id: "itu",
        lines: [
            {
                id: "b21t",
                td: transmissionData(generateValues())
            },

            {
                id: "d22t",
                td: transmissionData(generateValues())
            },
            {
                id: "e22t",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const itu = (wss, sentTopic, message) => {
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