var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'jebbaTs/tv';
const ncTopic = 'jebbaTs/status';

const preparedData = () => {    
    return {
        id: "jebbaGs",
        lines: [
            {
                id: "b8j",
                td: transmissionData(generateValues())
            },
            {
                id: "b9j",
                td: transmissionData(generateValues())
            }
        ]
    }
}

const ncData = () => {
    return {
        id: "jebbaTs",
        "nc": true,
    }
}

export const jebbaGs = (wss,sentTopic, message) => {
    var topics = [];
    if(!topics.includes(sentTopic)) topics.push(sentTopic);
    // console.log(topics);
    // console.log('message from mqtt: ', message.toString());
    wss.clients.forEach((wsClient) => {
        console.log('client ready');
        if (wsClient.readyState === WebSocket.OPEN && sentTopic == topic) {
            console.log('Jebba Gs message sent out: ', sentTopic);
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