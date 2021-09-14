var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        id: "afamIv_vGs",
        lines: [

            //Added by me
            {
                name: "f4p",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "f5p",
                transmissionData: transmissionData(generateValues())
            },
        ]
    }
};

export const afamIv_vGs = (wss) => {
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
