var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'egbinGs/tr';

const preparedData = () => {    
    return {
        id: "egbinGs",
        lines: [
            {
                id: "n7k",
                td: transmissionData(generateValues())
            },
            {
                id: "n8k",
                td: transmissionData(generateValues())
            },
            {
                id: "n6w",
                td: transmissionData(generateValues())
            },
            {
                id: "b6n",
                td: transmissionData(generateValues())
            },
            {
                id: "n3j",
                td: transmissionData(generateValues())
            },
            {
                id: "n4j",
                td: transmissionData(generateValues())
            },

            {
                id: "n21d",
                td: transmissionData(generateValues())
            },
            {
                id: "n22d",
                td: transmissionData(generateValues())
            },
        ]
    }
}

export const egbinGs = (wss, sentTopic, message) => {
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