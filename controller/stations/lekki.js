var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'lekki/tr';

const preparedData = () => {    
    return {
        id: "lekki",
        lines: [
            {
                id: "j1e",
                td: transmissionData(generateValues())
            },
            {
                id: "b1e",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const lekki = (wss, sentTopic, message) => {
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