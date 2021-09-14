var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "ajah",
        lines: [
            {
                name: "n3j",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "n4j",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "j1e",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "j1b",
                transmissionData: transmissionData(generateValues())
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