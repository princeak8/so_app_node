var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'gereguGs/tv';
const ncTopic = 'phmains/tv';

const preparedData = () => {    
    return {
        id: "gereguGs",
        lines: [
            {
                id: "r1j",
                td: transmissionData(generateValues())
            },
            {
                id: "r2j",
                td: transmissionData(generateValues())
            }
        ]
    }
}

const ncData = () => {
    return {
        id: "gereguGs",
        "nc": true,
        lines: [
            {
                id: "r1j",
                td: transmissionData()
            },
            {
                id: "r2j",
                td: transmissionData()
            }
        ]
    }
}

var lastData = ''; 

export const gereguGs = (wss, client) => {
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
        //console.log('message from phmain', message.toString())
        wss.clients.forEach((wsClient) => {
            //console.log('client ready');
            if (wsClient.readyState === WebSocket.OPEN && sentTopic == topic) {
                //console.log('message sent from phmain', message.toString())
                message = sanitizeData(message, sentTopic);
                const vals = message.toString();
                wsClient.send(message.toString());
            }
        });
    })
};

const sanitizeData = (message, topic) => {
    if(topic == ncTopic) {
        if(lastData == '') {
            message = ncData;
        }else{
            lastData["nc"] = true;
            message = lastData;
        }
    }else{
        lastData = message;
    }
    return message;
}