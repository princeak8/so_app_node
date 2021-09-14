var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "akangba",
        lines: [
            {
                name: "w3l",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "w2l",
                transmissionData: transmissionData(generateValues())
            },
        ]
    }
};

export const akangba = (wss) => {
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