var WebSocket = require('ws');
var mqtt = require('mqtt');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'odukpanits/tv';
const ncTopic = 'odukpanits/status';

const preparedData = () => {    
    return {
        id: "odukpaniGs",
        lines: [
            {
                id: "d1b",
                td: transmissionData(generateValues())
            },
            {
                id: "d2b",
                td: transmissionData(generateValues())
            },
            {
                id: "d1k",
                td: transmissionData(generateValues())
            },
            {
                id: "d2k",
                td: transmissionData(generateValues())
            }
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

// export const odukpaniGs = (wss, host, options) => {
//     var client  = mqtt.connect(host, options);
export const odukpaniGs = (wss, client) => {
    client.on('connect', function () {

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
        console.log("failed to connect Odukpani: "+error);
    })

    client.on('message', async function (sentTopic, message) {
        // console.log('message from mqtt: ', sentTopic+' '+topic);
        wss.clients.forEach((wsClient) => {
            //console.log('client ready');
            if (wsClient.readyState === WebSocket.OPEN && sentTopic == topic) {
                message = sanitizeData(message, sentTopic);
                //console.log('Odukpani message sent out: ', sentTopic);
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