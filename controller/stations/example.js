const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'adiabor/tv';
const ncTopic = 'adiabor/status';

const preparedData = () => {
    return {
        "id": "adiabor",
        "lines": [
            {
                "id": "d1b",
                "td":  transmissionData(generateValues())
            },
            {
                "id": "d2b",
                "td": transmissionData(generateValues())
            },
            {
                "id": "d22t",
                "td": transmissionData(generateValues())
            }
        ]
    }
};

const ncData = () => {
    return {
        id: "adiabor",
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

const lastData = ''; 

export const adiabor = (wss, client) => {
    client.on('connect', function () {
        //subscribe to topic

        client.subscribe(topic, function (err) {
            if (err) {
                console.log(err);
            }
        })
        client.subscribe(ncTopic, function (err) {
            if (err) {
                console.log(ncTopic+' error: '+err);
            }
        })
        setInterval(function(){
            const val = preparedData();
            client.publish(ncTopic, 'nc');
        }, 100000);
    })
    // var vals = preparedData();
    // vals['nc'] = true;
    // console.log(vals);

    client.on('error', function (error) {
        console.log("failed to connect: "+error);
    })

    client.on('message', async function (topic, message) {
        wss.clients.forEach((wsClient) => {
            //console.log('client ready');
            if (wsClient.readyState === WebSocket.OPEN) {
                message = sanitizeData(message, topic);
                //wsData = [data];
                //const vals = preparedData();
                const vals = message.toString();
                //const vals = JSON.parse(message);
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

//export default send;