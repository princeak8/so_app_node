var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {
    return {
        id: "benin",
        lines: [
            {
                id: "v7b",
                td
            },
            {
                id: "b5m",
                td
            },
            {
                id: "b6n",
                td
            },
            {
                id: "g3b",
                td
            },
            {
                id: "s3b",
                td
            },
            {
                id: "s4b",
                td
            },
            {
                id: "s5b",
                td
            },
            {
                id: "b11j",
                td
            },
            {
                id: "b12j",
                td
            },
            {
                id: "b1t",
                td
            },
            {
                id: "b2t",
                td
            },{
                id: "b3d",
                td
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
                client.send(JSON.stringify(vals));
            }
        });
    }, 30000);
};
