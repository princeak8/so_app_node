var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "ayade",
        lines: [
            {
                id: "r2a",
                td: transmissionData(generateValues())
            },
            {
                id: "h2a",
                td: transmissionData(generateValues())
            },
        ]
    }
};

export const ayade = (wss) => {
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