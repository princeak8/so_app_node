var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'gereguGs/tv';
const ncTopic = 'gereguGs/status';

const preparedData = () => {    
    return {
        id: "gereguGs",
        lines: [
            {
                id: "r1j",
                td: transmissionData(generateValues())
            },
            {
                id: "r2j",
                td: transmissionData(generateValues())
            }
        ]
    }
}

const ncData = () => {
    return {
        id: "gereguGs",
        "nc": true,
        lines: [
            {
                id: "r1j",
                td: transmissionData()
            },
            {
                id: "r2j",
                td: transmissionData()
            }
        ]
    }
}

var lastData = ''; 

export const gereguGs = (wss, sentTopic, message) => {
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