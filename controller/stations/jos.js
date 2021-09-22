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
                td
            },
            {
                id: "s1e",
                td
            },
            {
                id: "a1s",
                td
            },
            {
                id: "a2s",
                td
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