var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    return {
        id: "katampe",
        lines: [
            {
                id: "r4b",
                td: transmissionData(generateValues())
            },
            {
                id: "g5b",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const katampe = (wss) => {
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