var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "damaturu",
        lines: [
            {
                id: "e1d",
                td: transmissionData(generateValues())
            },
            {
                id: "d1l",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const damaturu = (wss) => {
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