var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');
const td = transmissionData(generateValues());


const preparedData = () => {    
    return {
        id: "kebbi",
        lines: [
            {
                id: "k3r",
                td: transmissionData(generateValues())
            }
        ]
    }
}

export const kebbi = (wss) => {
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