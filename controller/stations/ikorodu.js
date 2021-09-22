var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "ikorodu",
        lines: [
            {
                id: "n21d",
                td
            },
            {
                id: "n22d",
                td
            },
            {
                id: "d23s",
                td
            },
            {
                id: "d24s",
                td
            },
            {
                id: "d21p",
                td
            },
            {
                id: "d22p",
                td
            },
            {
                id: "d23y",
                td
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