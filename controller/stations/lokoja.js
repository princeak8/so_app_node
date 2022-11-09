var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'lokojats/tv';
const ncTopic = 'lokojats/status';

const preparedData = () => {    
    return {
        id: "lokoja",
        lines: [
            {
                id: "l6g",
                td: transmissionData(generateValues())
            },
            {
                id: "l7g",
                td: transmissionData(generateValues())
            },
            {
                id: "j1l",
                td: transmissionData(generateValues())
            },
            {
                id: "j2l",
                td: transmissionData(generateValues())
            }
        ]
    }
}

const ncData = () => {
    return {
        id: "odukpaniGs",
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

var lastData = ''; 

export const lokoja = (wss, sentTopic, message) => {
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