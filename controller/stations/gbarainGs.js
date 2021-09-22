var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "gbarainGs",
        lines: [
            {
                id: "h23r",
                td
            },
            {
                id: "h24r",
                td
            },
            {
                id: "r21y",
                td
            },
            {
                id: "r22y",
                td
            },
        ]
    }
}

export const gbarainGs = (wss) => {
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