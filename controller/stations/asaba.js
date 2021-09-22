var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "asaba",
        lines: [
            {
                id: "b3d",
                td: transmissionData(generateValues())
            },
            {
                id: "d3t",
                td: transmissionData(generateValues())
            },
        ]
    }
};

export const asaba = (wss) => {
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