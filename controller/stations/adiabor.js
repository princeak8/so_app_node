const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const preparedData = () => {
    return {
        name: "Adiabor TS",
        lines: [
            {
                name: "d1b",
                transmissionData:  transmissionData(generateValues())
            },
            {
                name: "d2b",
                transmissionData: transmissionData(generateValues())
            },

            //Added by me
            {
                name: "a1b",
                transmissionData: transmissionData(generateValues())
            },
            {
                name: "a2b",
                transmissionData: transmissionData(generateValues())
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