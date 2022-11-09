var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'ikejaWest/tr';

const preparedData = () => {    
    return {
        id: "ikejaWest",
        lines: [
            {
                id: "r1w",
                td: transmissionData(generateValues())
            },
            {
                id: "h1w",
                td: transmissionData(generateValues())
            },
            {
                id: "m5w",
                td: transmissionData(generateValues())
            },
            {
                id: "nw1bs",
                td: transmissionData(generateValues())
            },
            {
                id: "w3l",
                td: transmissionData(generateValues())
            },
            {
                id: "k7w",
                td: transmissionData(generateValues())
            },
            {
                id: "k8w",
                td: transmissionData(generateValues())
            },
            {
                id: "n6w",
                td: transmissionData(generateValues())
            },
            {
                id: "w4l",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const ikejaWest = (wss, sentTopic, message) => {
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