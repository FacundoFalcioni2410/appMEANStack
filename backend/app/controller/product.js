const productCtrl = {};

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
    const {name, price, quantity} = req.body
    const newProduct = new Product({name, price, quantity});
    await newProduct.save();
    res.send('created')
}

productCtrl.createProduct = async (req,res) =>{
    const {name, price, quantity} = req.body
    const newProduct = new Product({name, price, quantity});
    await newProduct.save();
    res.send('created')
}

productCtrl.updateProduct = async (req, res) =>{
    const r = await Product.findByIdAndUpdate(req.params.id, req.body);
    console.log(r);
    res.json({status: 'product updated'});
}

productCtrl.deleteProduct = async (req,res) =>{
    const employee = await Product.findByIdAndDelete(req.params.id);
    res.json({message: `${employee} eliminado`});
}

module.exports = productCtrl;