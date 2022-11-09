var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'aba/tr';

const preparedData = () => {
    return {
        "id": "aba",
        "lines": [
            {
                "id": "a23b",
                "td": transmissionData(generateValues())
            },
            {
                "id": "a26b",
                "td": transmissionData(generateValues())
            },
            {
                "id": "b21t",
                "td": transmissionData(generateValues())
            }
        ]
    }
};

export const aba = (wss, sentTopic, message) => {
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

//export default send;