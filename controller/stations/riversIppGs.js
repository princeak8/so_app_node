var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {    
    return {
        id: "riversIppGs",
        lines: [
            {
                id: "v21p",
                td: transmissionData(generateValues())
            },
            {
                id: "v22p",
                td: transmissionData(generateValues())
            },
        ]
    }
}

export const riversIppGs = (wss) => {
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