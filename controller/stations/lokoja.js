var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "lokoja",
        lines: [
            {
                id: "l6g",
                td
            },
            {
                id: "l7g",
                td
            },
            {
                id: "j1l",
                td
            },
            {
                id: "j2l",
                td
            }
        ]
    }
}

export const lokoja = (wss) => {
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