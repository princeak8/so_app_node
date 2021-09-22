var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "onitsha",
        lines: [
            {
                id: "b1t",
                td
            },
            {
                id: "b2t",
                td
            },
            {
                id: "d3t",
                td
            },
            {
                id: "t4a",
                td
            },
            {
                id: "t3h",
                td
            },
            {
                id: "k1t",
                td
            },
            {
                id: "k2t",
                td
            }
        ]
    }
}

export const onitsha = (wss) => {
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