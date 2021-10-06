const { Router } = require('express');

const router = Router();

const cartCtrl = require('../controller/cart');

router.get('/', cartCtrl.getCarts);
router.get('/:id', cartCtrl.getCart);
router.post('/', cartCtrl.updateCart);
router.put('/', cartCtrl.emptyCart);
router.delete('/:id', cartCtrl.deleteCart);

module.exports = router