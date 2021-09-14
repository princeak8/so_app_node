var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "alagbon",
        lines: [
            {
                name: "j1b",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "b1e",
                transmissionData: transmissionData(generateValues())
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