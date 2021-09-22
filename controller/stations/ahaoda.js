var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        "id": "ahaoda",
        "lines": [
            {
                "id": "w21h",
                "td": transmissionData(generateValues())
            },
            {
                "id": "w22h",
                "td": transmissionData(generateValues())
            },
            {
                "id": "h23r",
                "td": transmissionData(generateValues())
            },
            {
                "id": "h24r",
                "td": transmissionData(generateValues())
            },
        ]
    }
};

export const ahaoda = (wss) => {
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
