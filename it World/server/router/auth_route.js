
const express = require('express')
const router = express.Router();
const authcontroler =require('../controler/auth_controler')

const singnupSchema=require('../validators/auth_valdator')

const validate =require('../middleware/validate_middlewares')


// router.get('/', (req, res) => {
//     res.status(200).send('Wecome to my it world ')
//   })


router.route('/').get(authcontroler.home)

router.route('/register').post( validate(singnupSchema), authcontroler.rgister)

router.route('/login').post(authcontroler.login)




module.exports = router;