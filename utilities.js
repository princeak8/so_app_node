var WebSocket = require('ws');
import localStorage from "./localStorage";

export const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

exports.generateValues = () => {
    const volt = randomNumber(280, 360);
    const current = randomNumber(200, 500);
    const power = randomNumber(95, 300);
    const mvar = randomNumber(0, 45);
    return {volt: parseInt(volt), current: parseInt(current), power: parseInt(power), mvar: parseInt(mvar)};
}

export const transmissionData = (vals = '') => {
    if(vals == ''){
        var volt = 0.00; var current = 0.00; var power = 0.00; var mvar = 0.00;
    }else{
        var {volt, current, power, mvar} = vals;
    }
    return {
        mw: power,
        A: current,
        V: volt,
        mvar: mvar
    }
};

export const sendMessage = (wss, message) => {
    
    wss.clients.forEach((wsClient) => {
        // console.log('client ready');
        if (wsClient.readyState === WebSocket.OPEN) {
            let vals = message.toString();
            const parsedVals = JSON.parse(vals);
            const ikoroduLines = ["ikorodu1", "ikorodu2"];
            if(ikoroduLines.includes(parsedVals.id)) {
                console.log(vals);
                vals = ikoroduFn(parsedVals)
                // console.log(vals);
            }
            // console.log(parsedVals.id);
            wsClient.send(vals);
        }
    });
}

const ikoroduFn = (data) => {
    try{
        let ikorodu = localStorage.getItem('ikorodu');
        let ikoroduTemplate = {
            "id" : "ikorodu",
            "lines" : [
                {
                    "id" : "d23s",
                    "td" : {
                        
                        "mw" : "",
                        "A" :  "",
                        "V" :  "",
                        "mvar": ""
                    }
                },
                {
                    "id" : "d24s",
                    "td" : {
                        
                        "mw" : "",
                        "A" :  "",
                        "V" :  "",
                        "mvar": ""
                    }
                }
            ],
            "time": ""
        };
        if(ikorodu == undefined) {
            localStorage.setItem('ikorodu', ikoroduTemplate);
            ikorodu = ikoroduTemplate;
        }
        if(data.id == 'ikorodu1') {
            ikorodu.lines.forEach((line) => {
                if(line.id == 'd23s') line.td = data.lines[0].td;
            })
        }
        if(data.id == 'ikorodu2') {
            ikorodu.lines.forEach((line) => {
                if(line.id == 'd24s') line.td = data.lines[0].td;
            })
        }
        localStorage.setItem('ikorodu', ikorodu);
        ikorodu.time = data.time;
        // console.log('ikorodu', ikorodu);
        return JSON.stringify(ikorodu);
    }catch(err){
        console.log('error interpreting ikorodu: ', err);
    }
}