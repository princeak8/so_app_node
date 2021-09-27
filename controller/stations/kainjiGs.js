var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    return {
        id: "kainjiGs",
        lines: [
            {
                id: "kn1k",
                td: transmissionData(generateValues())
            },
            {
                id: "kn2k",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const kainjiGs = (wss) => {
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