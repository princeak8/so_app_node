var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "asaba",
        lines: [
            {
                name: "b3d",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "d3t",
                transmissionData: transmissionData(generateValues())
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