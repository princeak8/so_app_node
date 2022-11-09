var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'gbarainGs/tr';

const preparedData = () => {    
    return {
        id: "gbarainGs",
        lines: [
            {
                id: "h23r",
                td: transmissionData(generateValues())
            },
            {
                id: "h24r",
                td: transmissionData(generateValues())
            },
            {
                id: "r21y",
                td: transmissionData(generateValues())
            },
            {
                id: "r22y",
                td: transmissionData(generateValues())
            },
        ]
    }
}

export const gbarainGs = (wss, sentTopic, message) => {
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