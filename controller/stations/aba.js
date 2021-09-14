var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "aba",
        lines: [

            //Added by me
            {
                name: "a1b",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "a2b",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "b1i",
                transmissionData: transmissionData(generateValues())
            }
        ]
    }
};

export const aba = (wss) => {
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

//export default send;