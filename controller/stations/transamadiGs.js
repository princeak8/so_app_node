var WebSocket = require('ws');
const { transmissionData, generateValues } = require('../../utilities');

const defaultData = {
    id: "transamadiGs",
    lines: [
        {
            id: "m21p",
            td: transmissionData()
        },
        {
            id: "m22p",
            td: transmissionData()
        }
    ]
};

const transamadiGs = (topic, message) => {
    if(topic==topics[0]) return message;
    if(topic==topics[1]) return defaultData.toString();
};

const topics = ['transamadi/tv', 'transamadi/status']


// const topic = 'transamadi/tv';

// const preparedData = () => {    
//     return {
//         id: "transamadiGs",
//         lines: [
//             {
//                 id: "m21p",
//                 td: transmissionData(generateValues())
//             },
//             {
//                 id: "m22p",
//                 td: transmissionData(generateValues())
//             }
//         ]
//     }
// }
// var topics = [];
// export const transamadiGs = (wss, sentTopic, message) => {
//     if(!topics.includes(sentTopic)) topics.push(sentTopic);
//     // console.log(topics);
//     //console.log('message from mqtt: ', message.toString());
//     // console.log(wss.clients.length);
//     wss.clients.forEach((wsClient) => {
//         console.log('yes');
//     });
//     wss.clients.forEach((wsClient) => {
//         console.log('client ready');
//         if (wsClient.readyState === WebSocket.OPEN && sentTopic == topic) {
//             console.log('transamadi');
//             message = sanitizeData(message, sentTopic);
//             //wsData = [data];
//             const vals = message.toString();
//             console.log(vals);
//             wsClient.send(vals);
//         }
//     });
// };

// const sanitizeData = (message, topic) => {
//     // if(topic == ncTopic) {
//     //     if(lastData == '') {
//     //         message = ncData;
//     //     }else{
//     //         lastData["nc"] = true;
//     //         message = lastData;
//     //     }
//     // }else{
//     //     lastData = message;
//     // }
//     return message;
// }