
const express = require('express');
const router = express.Router()
const ContactForm = require('../controler/contact_controler');




router.route('/contact').post(ContactForm)



module.exports = router;