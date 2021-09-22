var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "aladja",
        lines: [
            {
                id: "g1w",
                td: transmissionData(generateValues())
            },
        ]
    }
};

export const aladja = (wss) => {
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