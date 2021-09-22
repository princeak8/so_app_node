var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        "id": "ajah",
        "lines": [
            {
                "id": "n3j",
                "td": transmissionData(generateValues())
            },
            {
                "id": "n4j",
                "td": transmissionData(generateValues())
            },
            {
                "id": "j1e",
                "td": transmissionData(generateValues())
            },
            {
                "id": "j1b",
                "td": transmissionData(generateValues())
            },
        ]
    }
};

export const ajah = (wss) => {
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