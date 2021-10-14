var WebSocket = require('ws');
var mqtt = require('mqtt');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'ikotekpene/tv';

const preparedData = () => {    
    return {
        id: "ikotEkpene",
        lines: [
            {
                id: "a1k",
                td: transmissionData(generateValues())
            },
            {
                id: "a2k",
                td: transmissionData(generateValues())
            },
            {
                id: "d1k",
                td: transmissionData(generateValues())
            },
            {
                id: "d2k",
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
            },
            {
                id: "s1k",
                td: transmissionData(generateValues())
            },
            {
                id: "s2k",
                td: transmissionData(generateValues())
            },
            {
                id: "f5k",
                td: transmissionData(generateValues())
            },
            {
                id: "f6k",
                td: transmissionData(generateValues())
            }
        ]
    }
}

//export const ikotEkpene = (wss, host, options) => {
    //var client  = mqtt.connect(host, options);
export const ikotEkpene = (wss, client) => {
    
    client.on('connect', function () {
        //console.log('connected to mqtt IkotEkpene');

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
        console.log("failed to connect IkotEkpene: "+error);
    })

    client.on('message', async function (sentTopic, message) {
        //console.log('message from mqtt: ', sentTopic);
        //console.log(wss);
        wss.clients.forEach((wsClient) => {
            //console.log('client ready');
            if (wsClient.readyState === WebSocket.OPEN && sentTopic == topic) {
                //console.log('IkotEkpene message sent out: ', sentTopic);
                //wsData = [data];
                //const valss = preparedData();
                //console.log(valss);
                const vals = message.toString();
                //console.log(vals);
                wsClient.send(vals);
            }
        });
    })
};