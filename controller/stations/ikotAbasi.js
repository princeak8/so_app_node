var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "ikotAbasi",
        lines: [
            {
                id: "s1k",
                td
            },
            {
                id: "s2k",
                td
            },
            {
                id: "bm23s",
                td
            },
            {
                id: "bm24s",
                td
            }
        ]
    }
}

export const ikotAbasi = (wss) => {
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