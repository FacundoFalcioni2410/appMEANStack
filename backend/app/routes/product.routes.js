const { Router } = require('express');

const router = Router();

const productCtrl = require('../controller/product');

router.get('/', productCtrl.getProducts);
router.post('/', productCtrl.createProduct);
router.get('/:id', productCtrl.getProduct);
router.put('/:id', productCtrl.updateProduct);
router.delete('/:id', productCtrl.deleteProduct);

module.exports = router