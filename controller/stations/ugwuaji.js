var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'ugwuajits/tv';
const preparedData = () => {    
    return {
        id: "ugwuaji",
        lines: [
            {
                id: "h1u",
                td: transmissionData(generateValues())
            },
            {
                id: "h2u",
                td: transmissionData(generateValues())
            },
            {
                id: "u1a",
                connectionRoot: false,
                td: transmissionData(generateValues())
            },
            {
                id: "u2a",
                td: transmissionData(generateValues())
            },
            {
                id: "k1u",
                td: transmissionData(generateValues())
            },
            {
                id: "k2u",
                td: transmissionData(generateValues())
            },
            {
                id: "k3u",
                td: transmissionData(generateValues())
            },
            {
                id: "k4u",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const ugwuaji = (wss, client) => {
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
                //console.log('ugwuaji message sent out: ', sentTopic);
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