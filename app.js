const express = require('express');
var session = require('express-session');
var cors = require("cors");
var bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
var mqtt = require('mqtt');
const http = require('http');
var WebSocket = require('ws');
const queryString = require('query-string');

const wss = new WebSocket.Server({ noServer: true });
//const wss2 = new WebSocket.Server({ port: 8085, noServer: true });

const routes = require('./routes/index');
const UsersController = require('./controller/users');
const ConnectionsController = require('./controller/connections');
//const StationsController = require('./controller/stations');
import StationsController from './controller/stations';
import Stations2Controller from './controller/stations2';

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    client : "host"
  })
);

app.use('/', routes);

const server = http.createServer(app);

const getToken = () => {
    return UsersController.socketToken();
}

server.on('upgrade', async function upgrade(request, socket, head) {
    // Do what you normally do in `verifyClient()` here and then use
    // `WebSocketServer.prototype.handleUpgrade()`.
    //let query = url.parse(request.url, true).query;
    const token = queryString.parse(request.url)['/token'];
    let authenticated = await ConnectionsController.socketToken(token);
    console.log('checking authentication', authenticated);
    if(authenticated) {
        let args;
        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request);
        });
        // wss2.handleUpgrade(request, socket, head, function done(ws2) {
        //     wss2.emit('connection', ws2, request);
        // });
    }else{
        return socket.end('HTTP/1.1 401 Unauthorized\r\n', 'ascii');
    }
    
  });

wss.on('connection', (ws) => {
    console.log('connected to ws');
    ws.send('Welcome to the chat, enjoy :)');
});

const options={
    clientId: process.env.NCC_CLIENT_ID,
    username:process.env.MQTT_USER,
    password:process.env.MQTT_PASS,
    clean:true
};

const options2={
    clientId: process.env.AWS_CLIENT_ID,
    username:process.env.MQTT_AWS_USER,
    password:process.env.MQTT_AWS_PASS,
    clean:true
};
//host = "mqtt://ec2-34-212-195-204.us-west-2.compute.amazonaws.com";//"mqtt://127.0.0.1"
const host = process.env.MQTT_HOST;
var client  = mqtt.connect(host, options);

const host2 = process.env.MQTT_AWS_HOST;
var client2  = mqtt.connect(host2, options2);

import topics from './topics';
import mqttConnect from './mqttConnect';

mqttConnect(client, topics);
mqttConnect(client2, topics);


// StationsController(wss, client);
// client.on('connect', function () {
//     console.log('connected');
// });
Stations2Controller(wss, client2);
StationsController(wss, client);

// setInterval(function(){
//     wss.clients.forEach((client) => {
//         //console.log('client ready');
//         if (client.readyState === WebSocket.OPEN) {
//             //wsData = [data];
//             const vals = StationsController.generateValues();
//             client.send(JSON.stringify(vals));
//         }
//     });
// }, 30000);





server.listen('3001', () => {
    console.log('Server started on port 3001');
})