var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "okearo",
        lines: [
            {
                id: "k7w",
                td
            },
            {
                id: "k8w",
                td
            },
            {
                id: "n7k",
                td
            },
            {
                id: "n8k",
                td
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