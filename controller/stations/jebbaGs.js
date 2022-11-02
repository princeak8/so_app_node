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

export const jebbaGs = (wss, client) => {
    client.on('connect', function () {
        //subscribe to topic

        client.subscribe(topic, function (err) {
            if (err) {
                console.log(err);
            }
        })
        // setInterval(function(){
        //     const val = preparedData();
        //     client.publish(topic, JSON.stringify(val));
        // }, 30000);
    })

    client.on('error', function (error) {
        console.log("failed to connect: "+error);
    })

    var topics = [];
    client.on('message', async function (sentTopic, message) {
        if(!topics.includes(sentTopic)) topics.push(sentTopic);
        // console.log(topics);
        // console.log('message from mqtt: ', message.toString());
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
    })
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