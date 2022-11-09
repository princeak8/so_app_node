var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'ahaoda/tr';

const preparedData = () => {
    return {
        "id": "ahaoda",
        "lines": [
            {
                "id": "w21h",
                "td": transmissionData(generateValues())
            },
            {
                "id": "w22h",
                "td": transmissionData(generateValues())
            },
            {
                "id": "h23r",
                "td": transmissionData(generateValues())
            },
            {
                "id": "h24r",
                "td": transmissionData(generateValues())
            },
        ]
    }
};

export const ahaoda = (wss, sentTopic, message) => {
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
