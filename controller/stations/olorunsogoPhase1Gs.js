var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "olorunsogoPhase1Gs",
        lines: [
            {
                id: "r2a",
                td: transmissionData(generateValues())
            },
            {
                id: "r1w",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const olorunsogoPhase1Gs = (wss) => {
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