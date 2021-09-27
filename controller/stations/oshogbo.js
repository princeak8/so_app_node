var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "oshogbo",
        lines: [
            {
                id: "j1h",
                td: transmissionData(generateValues())
            },
            {
                id: "j2h",
                td: transmissionData(generateValues())
            },
            {
                id: "h3g",
                td: transmissionData(generateValues())
            },
            {
                id: "h2a",
                td: transmissionData(generateValues())
            },
            {
                id: "h1w",
                td: transmissionData(generateValues())
            },
            {
                id: "h7v",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const oshogbo = (wss) => {
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