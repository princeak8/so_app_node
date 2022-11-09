var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'alaojinippts/tv';
const ncTopic = 'alaojinippts/status';

const preparedData = () => {
    return {
        id: "alaojiGs",
        lines: [
            {
                id: "l7a",
                td: transmissionData(generateValues())
            },
            {
                id: "l8a",
                td: transmissionData(generateValues())
            },
        ]
    }
};

const ncData = () => {
    return {
        id: "ekim",
        "nc": true,
    }
}

var lastData = '';

export const alaojiGs = (wss, sentTopic, message) => {
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