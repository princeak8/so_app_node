var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'sakete/tr';

const preparedData = () => {    
    return {
        id: "sakete",
        lines: [
            {
                id: "nw1bs",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const sakete = (wss, sentTopic, message) => {
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