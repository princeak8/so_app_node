var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "sapeleGs",
        lines: [
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
            }
        ]
    }
}

export const sapeleGs = (wss) => {
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