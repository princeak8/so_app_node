var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'gwagwaladats/tv';
const ncTopic = 'gwagwaladats/status';

const preparedData = () => {    
    return {
        id: "gwagwalada",
        lines: [
            {
                id: "r5g",
                td: transmissionData(generateValues())
            },
            {
                id: "g5b",
                td: transmissionData(generateValues())
            },
            {
                id: "l6g",
                td: transmissionData(generateValues())
            },
            {
                id: "l7g",
                td: transmissionData(generateValues())
            }
        ]
    }
}

const ncData = () => {
    return {
        id: "gwagwalada",
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

export const gwagwalada = (wss, client) => {
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
                message = sanitizeData(message, sentTopic);
                //console.log('gwagwalada message sent out: ', sentTopic);
                //wsData = [data];
                //const vals = preparedData();
                const vals = message.toString();
                wsClient.send(message.toString());
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