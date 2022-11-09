var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'markudits/tv';

const preparedData = () => {    
    return {
        id: "markudi",
        lines: [
            {
                id: "a1s",
                td: transmissionData(generateValues())
            },
            {
                id: "a2s",
                td: transmissionData(generateValues())
            },
            {
                id: "u1a",
                td: transmissionData(generateValues())
            },
            {
                id: "u2a",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const markudi = (wss, sentTopic, message) => {
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