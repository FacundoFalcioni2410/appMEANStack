const { Router } = require('express');

const router = Router();

const paymentCtrl = require('../controller/payment');

router.post('/', paymentCtrl.pay);

module.exports = router