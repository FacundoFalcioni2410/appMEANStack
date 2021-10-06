const { Router } = require('express');

const router = Router();

const UserCtrl = require('../controller/user');


router.get('/',UserCtrl.getUsers);
router.post('/signup',UserCtrl.createUser);
router.post('/signin',UserCtrl.validateUser);
router.put('/:id',UserCtrl.updateUser);
router.delete('/:id',UserCtrl.deleteUser);

module.exports = router