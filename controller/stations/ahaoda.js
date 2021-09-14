var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "ahaoda",
        lines: [
            {
                name: "h1o",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "h2o",
                transmissionData: transmissionData(generateValues())
            },
        ]
    }
};

export const ahaoda = (wss) => {
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
