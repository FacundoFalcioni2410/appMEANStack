const multer = require('multer');
const {v4: uuid} = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination: 'photos',
    filename: (res, file, cb) =>{
        cb(null, uuid() + path.extname(file.originalname));
    }
})

module.exports = multer({storage});