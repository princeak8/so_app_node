var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'ganmo/tr';

const preparedData = () => {    
    return {
        id: "ganmo",
        lines: [
            {
                id: "j3g",
                td: transmissionData(generateValues())
            },
            {
                id: "h3g",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const ganmo = (wss, sentTopic, message) => {
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