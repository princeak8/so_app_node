var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'afam6ts/tv';
const ncTopic = 'afam6ts/status';

const preparedData = () => {
    return {
        "id": "afam6ts",
        "lines": [
            {
                "id": "f6k",
                "td": transmissionData(generateValues())
            },
            {
                "id": "f5k",
                "td": transmissionData(generateValues())
            },
            {
                "id": "f1a",
                "td": transmissionData(generateValues())
            },
            {
                "id": "f2a",
                "td": transmissionData(generateValues())
            },
            {
                "id": "ada200",
                "td": transmissionData(generateValues())
            },
            {
                "id": "ada200",
                "td": transmissionData(generateValues())
            },
        ]
    }
};

export const afamViGs = (wss, sentTopic, message) => {
    //console.log('message from mqtt: ', message.toString());
    wss.clients.forEach((wsClient) => {
        //console.log('client ready');
        if (wsClient.readyState === WebSocket.OPEN && sentTopic == topic) {
            //console.log('asaba message sent out: ', sentTopic);
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