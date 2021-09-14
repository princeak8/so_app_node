var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "ajaokuta",
        lines: [
            {
                name: "j1l",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "j2l",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "b11j",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "b12j",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "r1j",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "r2j",
                transmissionData: transmissionData(generateValues())
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