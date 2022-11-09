var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'jebbaTs/tr';
const preparedData = () => {    
    return {
        id: "jebbaTs",
        lines: [
            {
                id: "k1j",
                td: transmissionData(generateValues())
            },
            {
                id: "k2j",
                td: transmissionData(generateValues())
            },
            {
                id: "j3r",
                td: transmissionData(generateValues())
            },


            {
                id: "j7r",
                td: transmissionData(generateValues())
            },


            {
                id: "b8j",
                td: transmissionData(generateValues())
            },
            
            {
                id: "b9j",
                td: transmissionData(generateValues())
            },
            {
                id: "j1h",
                td: transmissionData(generateValues())
            },
            {
                id: "j2h",
                td: transmissionData(generateValues())
            },
            {
                id: "j3g",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const jebba = (wss, sentTopic, message) => {
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