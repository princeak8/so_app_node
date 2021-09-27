var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "odukpaniGs",
        lines: [
            {
                id: "d1b",
                td: transmissionData(generateValues())
            },
            {
                id: "d2b",
                td: transmissionData(generateValues())
            },
            {
                id: "d1k",
                td: transmissionData(generateValues())
            },
            {
                id: "d2k",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const odukpaniGs = (wss) => {
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