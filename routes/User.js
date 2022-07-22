const express = require('express');
const router = express.Router();
const { DaftarUser, LoginUser, getSingleUser, forgotPassword } = require('../controller/user_controller');
const { runValidation, validationDaftar, validationLogin } = require('../validation');
const middleware = require('../middleware/middleware')

router.post('/daftar', validationDaftar, runValidation, DaftarUser);
router.post('/login', validationLogin, runValidation, LoginUser);
router.get('/user', middleware, getSingleUser);
router.put('/forgotPassword', forgotPassword);

module.exports = router