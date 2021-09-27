var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "jos",
        lines: [
            {
                id: "m2s",
                connectionRoot: false,
                td: transmissionData(generateValues())
            },
            {
                id: "s1e",
                td: transmissionData(generateValues())
            },
            {
                id: "a1s",
                td: transmissionData(generateValues())
            },
            {
                id: "a2s",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const jos = (wss) => {
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