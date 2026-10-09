export const options={
    clientId: process.env.NCC_CLIENT_ID,
    username:process.env.MQTT_USER,
    password:process.env.MQTT_PASS,
    clean:true
};

export const options2={
    clientId: process.env.AWS_CLIENT_ID,
    username:process.env.MQTT_AWS_USER,
    password:process.env.MQTT_AWS_PASS,
    clean:true
};
//host = "mqtt://ec2-34-212-195-204.us-west-2.compute.amazonaws.com";//"mqtt://127.0.0.1"
export const host = process.env.MQTT_HOST;

export const host2 = process.env.MQTT_AWS_HOST;