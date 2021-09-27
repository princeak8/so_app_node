var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {    
    return {
        id: "okearo",
        lines: [
            {
                id: "k7w",
                td: transmissionData(generateValues())
            },
            {
                id: "k8w",
                td: transmissionData(generateValues())
            },
            {
                id: "n7k",
                td: transmissionData(generateValues())
            },
            {
                id: "n8k",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const okearo = (wss) => {
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