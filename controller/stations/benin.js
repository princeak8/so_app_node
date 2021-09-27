var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {
    return {
        id: "benin",
        lines: [
            {
                id: "v7b",
                td: transmissionData(generateValues())
            },
            {
                id: "b5m",
                td: transmissionData(generateValues())
            },
            {
                id: "b6n",
                td: transmissionData(generateValues())
            },
            {
                id: "g3b",
                td: transmissionData(generateValues())
            },
            {
                id: "s3b",
                td: transmissionData(generateValues())
            },
            {
                id: "s4b",
                td: transmissionData(generateValues())
            },
            {
                id: "s5b",
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
                id: "b1t",
                td: transmissionData(generateValues())
            },
            {
                id: "b2t",
                td: transmissionData(generateValues())
            },{
                id: "b3d",
                td: transmissionData(generateValues())
            }
        ]
    }
};

export const benin = (wss) => {
    setInterval(function(){
        wss.clients.forEach((client) => {
            //console.log('client ready');
            if (client.readyState === WebSocket.OPEN) {
                //wsData = [data];
                const vals = preparedData();
                //console.log('data', vals);
                client.send(JSON.stringify(vals));
            }
        });
    }, 30000);
};
