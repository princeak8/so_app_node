var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "ikejaWest",
        lines: [
            {
                id: "r1w",
                td
            },
            {
                id: "h1w",
                td
            },
            {
                id: "m5w",
                td
            },
            {
                id: "nw1bs",
                td
            },
            {
                id: "w3l",
                td
            },
            {
                id: "k7w",
                td
            },
            {
                id: "k8w",
                td
            },
            {
                id: "n6w",
                td
            },
            {
                id: "w4l",
                td
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