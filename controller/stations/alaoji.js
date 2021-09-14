var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "alaoji",
        lines: [
            {
                name: "l7a",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "l8a",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "t4a",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "f1a",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "f2a",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "a1k",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "a2k",
                transmissionData: transmissionData(generateValues())
            },
            //Added by me
            {
                name: "a1b",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "a2b",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "a1o",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "a2o",
                transmissionData: transmissionData(generateValues())
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