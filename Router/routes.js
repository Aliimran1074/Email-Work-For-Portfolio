const express = require('express')
const router = express.Router()
const {mailSending} =require('../MailFunction/mail.controller')

router.route('/sendingMail').post(mailSending)

module.exports={router}