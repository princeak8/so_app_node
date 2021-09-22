var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "gwagwalada",
        lines: [
            {
                id: "r5g",
                td
            },
            {
                id: "g5b",
                td
            },
            {
                id: "l6g",
                td
            },
            {
                id: "l7g",
                td
            }
        ]
    }
}

export const gwagwalada = (wss) => {
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