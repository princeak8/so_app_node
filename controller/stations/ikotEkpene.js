var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "ikotEkpene",
        lines: [
            {
                id: "a1k",
                td: transmissionData(generateValues())
            },
            {
                id: "a2k",
                td: transmissionData(generateValues())
            },
            {
                id: "d1k",
                td: transmissionData(generateValues())
            },
            {
                id: "d2k",
                td: transmissionData(generateValues())
            },
            {
                id: "k1u",
                td: transmissionData(generateValues())
            },
            {
                id: "k2u",
                td: transmissionData(generateValues())
            },
            {
                id: "k3u",
                td: transmissionData(generateValues())
            },
            {
                id: "k4u",
                td: transmissionData(generateValues())
            },
            {
                id: "s1k",
                td: transmissionData(generateValues())
            },
            {
                id: "s2k",
                td: transmissionData(generateValues())
            },
            {
                id: "f5k",
                td: transmissionData(generateValues())
            },
            {
                id: "f6k",
                td: transmissionData(generateValues())
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