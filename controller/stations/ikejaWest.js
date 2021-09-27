var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "ikejaWest",
        lines: [
            {
                id: "r1w",
                td: transmissionData(generateValues())
            },
            {
                id: "h1w",
                td: transmissionData(generateValues())
            },
            {
                id: "m5w",
                td: transmissionData(generateValues())
            },
            {
                id: "nw1bs",
                td: transmissionData(generateValues())
            },
            {
                id: "w3l",
                td: transmissionData(generateValues())
            },
            {
                id: "k7w",
                td: transmissionData(generateValues())
            },
            {
                id: "k8w",
                td: transmissionData(generateValues())
            },
            {
                id: "n6w",
                td: transmissionData(generateValues())
            },
            {
                id: "w4l",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const ikejaWest = (wss) => {
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