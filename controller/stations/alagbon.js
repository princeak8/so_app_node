var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "alagbon",
        lines: [
            {
                id: "j1b",
                td: transmissionData(generateValues())
            },
            {
                id: "b1e",
                td: transmissionData(generateValues())
            },
        ]
    }
};

export const alagbon = (wss) => {
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