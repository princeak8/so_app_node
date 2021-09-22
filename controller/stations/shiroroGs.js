var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "shiroroGs",
        lines: [
            {
                id: "j3r",
                td
            },
            {
                id: "j7r",
                td
            },
            {
                id: "r1m",
                td
            },
            {
                id: "r4b",
                td
            },
            {
                id: "r2m",
                td
            },
            {
                id: "r5g",
                td
            }
        ]
    }
}

export const shiroroGs = (wss) => {
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