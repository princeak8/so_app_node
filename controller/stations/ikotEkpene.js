var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "ikotEkpene",
        lines: [
            {
                id: "a1k",
                td
            },
            {
                id: "a2k",
                td
            },
            {
                id: "d1k",
                td
            },
            {
                id: "d2k",
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
            },
            {
                id: "s1k",
                td
            },
            {
                id: "s2k",
                td
            },
            {
                id: "f5k",
                td
            },
            {
                id: "f6k",
                td
            }
        ]
    }
}

export const ikotEkpene = (wss) => {
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