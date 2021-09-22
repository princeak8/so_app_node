var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "phMain",
        lines: [
            {
                id: "m21p",
                td
            },
            {
                id: "m22p",
                td
            },
            {
                id: "mk21p",
                td
            },
            {
                id: "v22p",
                td
            },
            {
                id: "v21p",
                td
            },
            {
                id: "f21p",
                td
            },
            {
                id: "f22p",
                td
            },
        ]
    }
}

export const phMain = (wss) => {
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