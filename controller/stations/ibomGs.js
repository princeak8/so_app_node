var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'ibomGs/tr';

const preparedData = () => {    
    return {
        id: "ibomGs",
        lines: [
            {
                id: "e21m",
                td: transmissionData(generateValues())
            },
            {
                id: "e22m",
                td: transmissionData(generateValues())
            },
            {
                id: "bm23s",
                td: transmissionData(generateValues())
            },
            {
                id: "bm24s",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const ibomGs = (wss, sentTopic, message) => {
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