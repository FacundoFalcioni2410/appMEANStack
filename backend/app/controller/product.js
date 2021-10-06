const productCtrl = {};

const path = require('path');
const fs = require('fs-extra');
const Product = require('../models/product');

productCtrl.getProducts = async (req, res) =>{
    const products = await Product.find()
    res.json(products)
}

productCtrl.getProduct = async (req, res) =>{
    const employee = await Product.findById(req.params.id);
    res.json(employee);
}

productCtrl.createProduct = async (req,res) =>{
    console.log(req.body);
    const {name, price, quantity} = req.body;
    let imagePath = req.file.filename;
    imagePath = 'photos/' + imagePath
    const newProduct = new Product({name, price, quantity, imagePath});
    console.log(imagePath);
    await newProduct.save();
    res.json({success: true, product: newProduct});
}

// productCtrl.createProduct = async (req,res) =>{
//     const {name, price, quantity} = req.body
//     const newProduct = new Product({name, price, quantity});
//     await newProduct.save();
//     res.send('created')
// }

productCtrl.updateProduct = async (req, res) =>{
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body);
    if(updated)
    {
        res.json({success: true, message: 'product updated'});
    }
    else
    {
        res.status(400).json({success: false, error: 'The product was not updated'})
    }
}

productCtrl.deleteProduct = async (req,res) =>{
    const producDeleted = await Product.findByIdAndDelete(req.params.id);
    if(producDeleted)
    {
        fs.unlink(path.resolve(producDeleted.imagePath));
        res.json({success: true, product: producDeleted});
    }
    else
    {
        res.status(400).json({success: false, error: 'The product does not exist'});
    }
}

module.exports = productCtrl;