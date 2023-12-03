
const express = require('express')
const router = express.Router()
const auhControler = require("../controler/controler-auth")

const singnupSchema=require('../validator/auth-validator')

const validate =require('../middlewares/validate-middle-wares')



router.route('/').get(auhControler.home)

router.route('/register').post(validate(singnupSchema),auhControler.register)

router.route('/login').post( validate(singnupSchema), auhControler.login)


// router.route('/create').post( auhControler.create)





module.exports = router;