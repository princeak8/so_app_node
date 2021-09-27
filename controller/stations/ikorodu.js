var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "ikorodu",
        lines: [
            {
                id: "n21d",
                td: transmissionData(generateValues())
            },
            {
                id: "n22d",
                td: transmissionData(generateValues())
            },
            {
                id: "d23s",
                td: transmissionData(generateValues())
            },
            {
                id: "d24s",
                td: transmissionData(generateValues())
            },
            {
                id: "d21p",
                td: transmissionData(generateValues())
            },
            {
                id: "d22p",
                td: transmissionData(generateValues())
            },
            {
                id: "d23y",
                td: transmissionData(generateValues())
            },
        ]
    }
}

export const ikorodu = (wss) => {
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