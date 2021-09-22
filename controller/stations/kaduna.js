var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "kaduna",
        lines: [
            {
                id: "r1m",
                td
            },
            {
                id: "r2m",
                td
            },
            {
                id: "m6n",
                td
            },
            {
                id: "m2s",
                td
            }
        ]
    }
}

export const kaduna = (wss) => {
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