var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "eket",
        lines: [
            {
                id: "e22t",
                td: transmissionData(generateValues())
            },
            {
                id: "e21m",
                td: transmissionData(generateValues())
            },
            {
                id: "e22m",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const eket = (wss) => {
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