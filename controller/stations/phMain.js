var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'phmains/tv';
const ncTopic = 'phmains/status';

const preparedData = () => {    
    return {
        id: "phMain",
        lines: [
            {
                id: "m21p",
                td: transmissionData(generateValues())
            },
            {
                id: "m22p",
                td: transmissionData(generateValues())
            },
            {
                id: "mk21p",
                td: transmissionData(generateValues())
            },
            {
                id: "v22p",
                td: transmissionData(generateValues())
            },
            {
                id: "v21p",
                td: transmissionData(generateValues())
            },
            {
                id: "f21p",
                td: transmissionData(generateValues())
            },
            {
                id: "f22p",
                td: transmissionData(generateValues())
            },
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

export const phMain = (wss, sentTopic, message) => {
    //console.log('message from mqtt: ', message.toString());
    wss.clients.forEach((wsClient) => {
        //console.log('client ready');
        if (wsClient.readyState === WebSocket.OPEN && sentTopic == topic) {
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
