var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "oshogbo",
        lines: [
            {
                id: "j1h",
                td
            },
            {
                id: "j2h",
                td
            },
            {
                id: "h3g",
                td
            },
            {
                id: "h2a",
                td
            },
            {
                id: "h1w",
                td
            },
            {
                id: "h7v",
                td
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