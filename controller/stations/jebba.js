var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "jebbaTs",
        lines: [
            {
                id: "k1j",
                td: transmissionData(generateValues())
            },
            {
                id: "k2j",
                td: transmissionData(generateValues())
            },
            {
                id: "j3r",
                td: transmissionData(generateValues())
            },


            {
                id: "j7r",
                td: transmissionData(generateValues())
            },


            {
                id: "b8j",
                td: transmissionData(generateValues())
            },
            
            {
                id: "b9j",
                td: transmissionData(generateValues())
            },
            {
                id: "j1h",
                td: transmissionData(generateValues())
            },
            {
                id: "j2h",
                td: transmissionData(generateValues())
            },
            {
                id: "j3g",
                td: transmissionData(generateValues())
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