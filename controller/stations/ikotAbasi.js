var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'ikotAbasi/tr';

const preparedData = () => {    
    return {
        id: "ikotAbasi",
        lines: [
            {
                id: "s1k",
                td: transmissionData(generateValues())
            },
            {
                id: "s2k",
                td: transmissionData(generateValues())
            },
            {
                id: "bm23s",
                td: transmissionData(generateValues())
            },
            {
                id: "bm24s",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const ikotAbasi = (wss, sentTopic, message) => {
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