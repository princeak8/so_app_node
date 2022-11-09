var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'OkpaiippGs/tv';
const ncTopic = 'OkpaiippGs/status';

const preparedData = () => {    
    return {
        id: "okpaiGs",
        lines: [
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

export const okpaiGs = (wss, sentTopic, message) => {
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