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

export const markudi = (wss, client) => {
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

    client.on('message', async function (sentTopic, message) {
        //console.log('message from mqtt: ', message.toString());
        wss.clients.forEach((wsClient) => {
            //console.log('client ready');
            if (wsClient.readyState === WebSocket.OPEN && sentTopic == topic) {
                //console.log('markudi message sent out: ', sentTopic);
                message = sanitizeData(message, sentTopic);
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