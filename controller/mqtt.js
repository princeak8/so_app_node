const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.socketToken = (token) => {
    setToken = '654321';
    return (token == setToken);
}

exports.getClient = async (req, res) => {
    const token = req.body.token;
    try{
        if(token=='123'){
            const client = req.session.client;
            res.status(200).json({
                statusCode: 200,
                client: client,
            });
        }
    }catch(err){
        console.log('could not get client: '+err);
        res.status(500).json({
            statusCode: 500,
            message: 'could not get client: '+err
        });
    }
}

exports.test = (req, res) => {
    console.log('client: ', req.session.client);
}