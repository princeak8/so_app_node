const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        "id": "adiabor",
        "lines": [
            {
                "name": "d1b",
                "td":  transmissionData(generateValues())
            },
            {
                "name": "d2b",
                "td": transmissionData(generateValues())
            },
            {
                "name": "d22t",
                "td": transmissionData(generateValues())
            }
        ]
    }
};

export const adiabor = (wss) => {
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