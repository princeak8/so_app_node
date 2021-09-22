var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "kainjiTs",
        lines: [
            {
                id: "k3r",
                td
            },
            {
                id: "k1f",
                td
            },
            {
                id: "k1j",
                td
            },
            {
                id: "k2j",
                td
            },

            {
                id: "kn1k",
                td
            },
            {
                id: "kn2k",
                td
            }
        ]
    }
}

export const kainji = (wss) => {
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