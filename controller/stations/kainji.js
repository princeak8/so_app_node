var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const topic = 'kainjits/tv';
const ncTopic = 'kainjits/status';

const preparedData = () => {    
    return {
        id: "kainjiTs",
        lines: [
            {
                id: "k3r",
                td: transmissionData(generateValues())
            },
            {
                id: "k1f",
                td: transmissionData(generateValues())
            },
            {
                id: "k1j",
                td: transmissionData(generateValues())
            },
            {
                id: "k2j",
                td: transmissionData(generateValues())
            },

            {
                id: "kn1k",
                td: transmissionData(generateValues())
            },
            {
                id: "kn2k",
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

export const kainji = (wss, client) => {
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
        console.log(topics);
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