var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());

const preparedData = () => {    
    return {
        id: "jebbaGs",
        lines: [
            {
                id: "b8j",
                td: transmissionData(generateValues())
            },
            {
                id: "b9j",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const jebbaGs = (wss) => {
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