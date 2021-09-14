var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "alaojiGs",
        lines: [
            {
                name: "l7a",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "l8a",
                transmissionData: transmissionData(generateValues())
            },
        ]
    }
};

export const alaojiGs = (wss) => {
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