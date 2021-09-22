var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        "id": "afamViGs",
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
        ]
    }
};

export const afamViGs = (wss) => {
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