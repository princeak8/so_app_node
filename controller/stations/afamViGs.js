var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'afam6ts/tv';
const ncTopic = 'afam6ts/status';

const preparedData = () => {
    return {
        "id": "afam6ts",
        "lines": [
            {
                "id": "f6k",
                "td": transmissionData(generateValues())
            },
            {
                "id": "f5k",
                "td": transmissionData(generateValues())
            },
            {
                "id": "f1a",
                "td": transmissionData(generateValues())
            },
            {
                "id": "f2a",
                "td": transmissionData(generateValues())
            },
            {
                "id": "ada200",
                "td": transmissionData(generateValues())
            },
            {
                "id": "ada200",
                "td": transmissionData(generateValues())
            },
        ]
    }
};

export const afamViGs = (wss, client) => {
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

    client.on('message', async function (topic, message) {
        //console.log('message from mqtt: ', message.toString());
        wss.clients.forEach((wsClient) => {
            //console.log('client ready');
            if (wsClient.readyState === WebSocket.OPEN) {
                //wsData = [data];
                const vals = preparedData();
                wsClient.send(message.toString());
            }
        });
    })
};