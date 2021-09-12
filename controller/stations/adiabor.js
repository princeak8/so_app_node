const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var WebSocket = require('ws');
const { randomNumber } = require('../../utilities');

const generateValues = () => {
    const volt = randomNumber(280, 360);
    const current = randomNumber(200, 500);
    const power = randomNumber(95, 300);
    const mvar = randomNumber(0, 45);
    return {volt: parseInt(volt), current: parseInt(current), power: parseInt(power), mvar: parseInt(mvar)};
}
const transmissionData = (vals) => {
    var {volt, current, power, mvar} = vals;
    return {
        power: power,
        current: current,
        voltage: volt,
        mvar: mvar
    }
};

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