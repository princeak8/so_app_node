var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        "id": "aba",
        "lines": [
            {
                "name": "a23b",
                "td": transmissionData(generateValues())
            },
            {
                "name": "a26b",
                "td": transmissionData(generateValues())
            },
            {
                "name": "b21t",
                "td": transmissionData(generateValues())
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