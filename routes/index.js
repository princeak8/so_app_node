const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const UsersController = require('../controller/users');
const mqttController = require('../controller/mqtt');

router.post('/register', UsersController.register);

router.post('/login', UsersController.login);

router.get('/', checkAuth, (req, res)=>{
    res.json({
        message: 'Welcome to the home page'
    })
});

router.get('/get_client', mqttController.test);

module.exports = router;