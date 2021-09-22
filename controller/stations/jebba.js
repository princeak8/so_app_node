var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "jebbaTs",
        lines: [
            {
                id: "k1j",
                td
            },
            {
                id: "k2j",
                td
            },
            {
                id: "j3r",
                td
            },


            {
                id: "j7r",
                td
            },


            {
                id: "b8j",
                td
            },
            
            {
                id: "b9j",
                td
            },
            {
                id: "j1h",
                td
            },
            {
                id: "j2h",
                td
            },
            {
                id: "j3g",
                td
            }
        ]
    }
}

export const jebba = (wss) => {
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