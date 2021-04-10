const express = require('express');
const router = express.Router();
var mongoose = require('../config/db_config');

const contactSchema = require('../models/contactus');

router.post('/', (req, res) => {
    let contact = new contactSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        instrument: req.body.instrument,
        momsNameTelEmail: req.body.momsNameTelEmail,
        schoolGrade: req.body.schoolGrade,
        teachersNameEmail: req.body.teachersNameEmail
    })

    contact.save().then(response => {
        console.log("Contact form saved successfully", response)
        res.status(200).send(response)
    }).catch(error => {
        res.status(500).json(error)
    })

})
module.exports = router