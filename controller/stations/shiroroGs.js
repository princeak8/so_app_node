var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "shiroroGs",
        lines: [
            {
                id: "j3r",
                td: transmissionData(generateValues())
            },
            {
                id: "j7r",
                td: transmissionData(generateValues())
            },
            {
                id: "r1m",
                td: transmissionData(generateValues())
            },
            {
                id: "r4b",
                td: transmissionData(generateValues())
            },
            {
                id: "r2m",
                td: transmissionData(generateValues())
            },
            {
                id: "r5g",
                td: transmissionData(generateValues())
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