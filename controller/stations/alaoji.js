var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "alaoji",
        lines: [
            {
                id: "l7a",
                td: transmissionData(generateValues())
            },
            {
                id: "l8a",
                td: transmissionData(generateValues())
            },
            {
                id: "t4a",
                td: transmissionData(generateValues())
            },
            {
                id: "f1a",
                td: transmissionData(generateValues())
            },
            {
                id: "f2a",
                td: transmissionData(generateValues())
            },
            {
                id: "a1k",
                td: transmissionData(generateValues())
            },
            {
                id: "a2k",
                td: transmissionData(generateValues())
            },
            //Added by me
            {
                id: "a1b",
                td: transmissionData(generateValues())
            },
            {
                id: "a2b",
                td: transmissionData(generateValues())
            },
            {
                id: "a1o",
                td: transmissionData(generateValues())
            },
            {
                id: "a2o",
                td: transmissionData(generateValues())
            },
        ]
    }
};

export const alaoji = (wss) => {
    setInterval(function(){
        wss.clients.forEach((client) => {
            //console.log('client ready');
            if (client.readyState === WebSocket.OPEN) {
                //wsData = [data];
                const vals = preparedData();
                client.send(JSON.stringify(vals));
            }
        });
    }, 30000);
};