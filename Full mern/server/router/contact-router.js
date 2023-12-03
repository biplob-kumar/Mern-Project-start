


const express = require('express')
const router = express.Router()
const ContactForm = require('../controler/contact-controler')


router.route('/contact').post(ContactForm)



module.exports = router;