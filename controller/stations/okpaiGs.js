var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "okpaiGs",
        lines: [
            {
                id: "k1t",
                td: transmissionData(generateValues())
            },
            {
                id: "k2t",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const okpaiGs = (wss) => {
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