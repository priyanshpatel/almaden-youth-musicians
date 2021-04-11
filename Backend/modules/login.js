const express = require('express');
const router = express.Router();
var mongoose = require('../config/db_config');

const loginSchema = require('../models/login');

router.post('/', (req, res) => {
    let login = new loginSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        image: req.body.image
    })

    login.save().then(response => {
        console.log("Login info saved successfully", response)
        res.status(200).send(response)
    }).catch(error => {
        res.status(500).json(error)
    })

})
module.exports = router