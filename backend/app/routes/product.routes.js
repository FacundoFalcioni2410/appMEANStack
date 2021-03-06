const multer = require('../../libs/multer');
const { Router } = require('express');

const router = Router();

const productCtrl = require('../controller/product');


router.get('/', productCtrl.getProducts);
router.post('/', multer.array('image', 5), productCtrl.createProduct);
router.get('/:id', productCtrl.getProduct);
router.put('/:id', multer.array('image', 5), productCtrl.updateProduct);
router.delete('/:id', productCtrl.deleteProduct);

module.exports = router;