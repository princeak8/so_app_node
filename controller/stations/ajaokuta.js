var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "ajaokuta",
        lines: [
            {
                id: "j1l",
                td: transmissionData(generateValues())
            },
            {
                id: "j2l",
                td: transmissionData(generateValues())
            },
            {
                id: "b11j",
                td: transmissionData(generateValues())
            },
            {
                id: "b12j",
                td: transmissionData(generateValues())
            },
            {
                id: "r1j",
                td: transmissionData(generateValues())
            },
            {
                id: "r2j",
                td: transmissionData(generateValues())
            },
        ]
    }
};

export const ajaokuta = (wss) => {
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