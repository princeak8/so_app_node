var WebSocket = require('ws');
var mqtt = require('mqtt');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'odukpanits/tv';
const ncTopic = 'odukpanits/status';

const preparedData = () => {    
    return {
        id: "odukpaniGs",
        lines: [
            {
                id: "d1b",
                td: transmissionData(generateValues())
            },
            {
                id: "d2b",
                td: transmissionData(generateValues())
            },
            {
                id: "d1k",
                td: transmissionData(generateValues())
            },
            {
                id: "d2k",
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

// export const odukpaniGs = (wss, host, options) => {
//     var client  = mqtt.connect(host, options);
export const odukpaniGs = (wss, sentTopic, message) => {
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