var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "egbinGs",
        lines: [
            {
                id: "n7k",
                td
            },
            {
                id: "n8k",
                td
            },
            {
                id: "n6w",
                td
            },
            {
                id: "b6n",
                td
            },
            {
                id: "n3j",
                td
            },
            {
                id: "n4j",
                td
            },

            {
                id: "n21d",
                td
            },
            {
                id: "n22d",
                td
            },
        ]
    }
}

export const egbinGs = (wss) => {
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