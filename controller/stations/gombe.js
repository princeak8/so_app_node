var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "gombe",
        lines: [
            {
                id: "s1e",
                td
            },
            {
                id: "w23e",
                td
            },
            {
                id: "e1y",
                td
            },
            {
                id: "e1d",
                td
            }
        ]
    }
}

export const gombe = (wss) => {
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