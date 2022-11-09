const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'adiabor/tv';
const ncTopic = 'adiabor/status';

const preparedData = () => {
    return {
        "id": "adiabor",
        "lines": [
            {
                "id": "d1b",
                "td":  transmissionData(generateValues())
            },
            {
                "id": "d2b",
                "td": transmissionData(generateValues())
            },
            {
                "id": "d22t",
                "td": transmissionData(generateValues())
            }
        ]
    }
};

const ncData = () => {
    return {
        id: "adiabor",
        "nc": true,
        lines: [
            {
                id: "d1b",
                td: transmissionData()
            },
            {
                id: "d2b",
                td: transmissionData()
            },
            {
                id: "d1k",
                td: transmissionData()
            },
            {
                id: "d2k",
                td: transmissionData()
            }
        ]
    }
}

const lastData = ''; 

export const adiabor = (wss, sentTopic, message) => {
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