var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'ugwuajits/tv';
const preparedData = () => {    
    return {
        id: "ugwuaji",
        lines: [
            {
                id: "h1u",
                td: transmissionData(generateValues())
            },
            {
                id: "h2u",
                td: transmissionData(generateValues())
            },
            {
                id: "u1a",
                connectionRoot: false,
                td: transmissionData(generateValues())
            },
            {
                id: "u2a",
                td: transmissionData(generateValues())
            },
            {
                id: "k1u",
                td: transmissionData(generateValues())
            },
            {
                id: "k2u",
                td: transmissionData(generateValues())
            },
            {
                id: "k3u",
                td: transmissionData(generateValues())
            },
            {
                id: "k4u",
                td: transmissionData(generateValues())
            }
        ]
    }
}

const ncData = () => {
    return {
        id: "ekim",
        "nc": true,
    }
}
var topics = [];
export const ugwuaji = (wss, sentTopic, message) => {
    // var topics = [];
    if(!topics.includes(sentTopic)) topics.push(sentTopic);
    // console.log(topics);
    // console.log('message from mqtt: ', message.toString());
    wss.clients.forEach((wsClient) => {
        console.log('client ready');
        if (wsClient.readyState === WebSocket.OPEN && sentTopic == topic) {
            // console.log('ugwuaji message sent out: ', sentTopic);
            message = sanitizeData(message, sentTopic);
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