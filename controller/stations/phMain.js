var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'phmains/tv';
const ncTopic = 'phmains/status';

const preparedData = () => {    
    return {
        id: "phMain",
        lines: [
            {
                id: "m21p",
                td: transmissionData(generateValues())
            },
            {
                id: "m22p",
                td: transmissionData(generateValues())
            },
            {
                id: "mk21p",
                td: transmissionData(generateValues())
            },
            {
                id: "v22p",
                td: transmissionData(generateValues())
            },
            {
                id: "v21p",
                td: transmissionData(generateValues())
            },
            {
                id: "f21p",
                td: transmissionData(generateValues())
            },
            {
                id: "f22p",
                td: transmissionData(generateValues())
            },
        ]
    }
}

const ncData = () => {
    return {
        id: "odukpaniGs",
        "nc": true,
        lines: [
            {
                id: "d1b",
                td: transmissionData()
            },
            {
                id: "d2b",
                td: transmissionData()
            },
            {
                id: "d1k",
                td: transmissionData()
            },
            {
                id: "d2k",
                td: transmissionData()
            }
        ]
    }
}

var lastData = '';

export const phMain = (wss, client) => {
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
