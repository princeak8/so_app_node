var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "owerri",
        lines: [
            {
                id: "a23w",
                td: transmissionData(generateValues())
            },
            {
                id: "a24w",
                td: transmissionData(generateValues())
            },
            {
                id: "w21h",
                td: transmissionData(generateValues())
            },
            {
                id: "w22h",
                td: transmissionData(generateValues())
            },
        ]
    }
}

export const owerri = (wss) => {
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