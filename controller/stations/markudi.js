var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "markudi",
        lines: [
            {
                id: "a1s",
                td
            },
            {
                id: "a2s",
                td
            },
            {
                id: "u1a",
                td
            },
            {
                id: "u2a",
                td
            }
        ]
    }
}

export const markudi = (wss) => {
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