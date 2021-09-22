var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "ugwuaji",
        lines: [
            {
                id: "h1u",
                td
            },
            {
                id: "h2u",
                td
            },
            {
                id: "u1a",
                connectionRoot: false,
                td
            },
            {
                id: "u2a",
                td
            },
            {
                id: "k1u",
                td
            },
            {
                id: "k2u",
                td
            },
            {
                id: "k3u",
                td
            },
            {
                id: "k4u",
                td
            }
        ]
    }
}

export const ugwuaji = (wss) => {
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