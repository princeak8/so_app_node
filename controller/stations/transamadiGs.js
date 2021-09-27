var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "transamadiGs",
        lines: [
            {
                id: "m21p",
                td: transmissionData(generateValues())
            },
            {
                id: "m22p",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const transamadiGs = (wss) => {
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