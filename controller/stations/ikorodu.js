var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'ikorodu/tr';

const preparedData = () => {    
    return {
        id: "ikorodu",
        lines: [
            {
                id: "n21d",
                td: transmissionData(generateValues())
            },
            {
                id: "n22d",
                td: transmissionData(generateValues())
            },
            {
                id: "d23s",
                td: transmissionData(generateValues())
            },
            {
                id: "d24s",
                td: transmissionData(generateValues())
            },
            {
                id: "d21p",
                td: transmissionData(generateValues())
            },
            {
                id: "d22p",
                td: transmissionData(generateValues())
            },
            {
                id: "d23y",
                td: transmissionData(generateValues())
            },
        ]
    }
}

export const ikorodu = (wss, sentTopic, message) => {
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

/*
{
    "id":"ikorodu",
    "lines":
    [
        {"id":"d23s","td":{"mw":-6.95,"A":125.21,"V":127.68,"mvar":26.78}},{"id":"d24s","td":{"mw":74.91,"A":356.18,"V":128.45,"mvar":22.09}}]
}
*/