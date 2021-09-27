var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "ganmo",
        lines: [
            {
                id: "j3g",
                td: transmissionData(generateValues())
            },
            {
                id: "h3g",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const ganmo = (wss) => {
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