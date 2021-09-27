var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "newHaven",
        lines: [
            {
                id: "h1u",
                td
            },
            {
                id: "h2u",
                td
            },
            {
                id: "t3h",
                td
            }
        ]
    }
}

export const newHaven = (wss) => {
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