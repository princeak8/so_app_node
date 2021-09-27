var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "ihovborNippGs",
        lines: [
            {
                id: "h7v",
                td: transmissionData(generateValues())
            },
            {
                id: "v7b",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const ihovborNippGs = (wss) => {
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