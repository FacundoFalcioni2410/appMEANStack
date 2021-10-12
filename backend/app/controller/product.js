const productCtrl = {};

const path = require('path');
const fs = require('fs-extra');
const mongoose = require('mongoose');
const Product = require('../models/product');

productCtrl.getProducts = async (req, res) =>{
    const products = await Product.find()
    res.json(products)
}

productCtrl.getProduct = async (req, res) =>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
    {
        return res.status(404).json({success:false, error: 'Not valid id'})
    }
    else
    {
        const product = await Product.findById(req.params.id);
        if(!product)
        {
            return res.status(404).json({success:false, error: 'Not product found'});
        }
        return res.json({success:true, product: product});
    }
}

productCtrl.createProduct = async (req,res) =>{
    console.log(req.body);
    const {name, price, stock, description, category} = req.body;

    let imagesArr = req.files;
    let images = [];
    for(let item of imagesArr)
    {
        item.filename = 'photos/' + item.filename;
        images.push(item.filename);
    }
    console.log(images);
    const newProduct = new Product({name, price, stock, images, description, category});
    await newProduct.save();
    res.json({success: true, product: newProduct});
}

productCtrl.updateProduct = async (req, res) =>{
    const { deletedImages } = req.body;
    console.log(req.body)
    console.log(deletedImages);
    
    const product = await Product.findById(req.params.id);
    console.log(product);

    if(deletedImages)
    {
        if(Array.isArray(deletedImages))
        {
            for(let item of deletedImages)
            {
                try
                {
                    fs.unlink(path.resolve(item));
                    let index = product.images.indexOf(item);
                    product.images.splice(index, 1);
                }
                catch(err)
                {
                    console.log(err);
                }
            }
        }
        else
        {
            try
            {
                fs.unlink(path.resolve(deletedImages));
                let index = product.images.indexOf(deletedImages);
                product.images.splice(index, 1);
            }
            catch(err)
            {
                console.log(err);
            }
        }
    }

    let imagesArr = req.files;
    if(imagesArr)
    {
        for(let item of imagesArr)
        {
            item.filename = 'photos/' + item.filename;
            product.images.push(item.filename);
        }
        console.log(product.images);
        req.body.images = product.images;
    }
    
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
    // const productDeleted = await Product.deleteMany({});
    const productDeleted = await Product.findByIdAndDelete(req.params.id);
    if(productDeleted)
    {
        for(let image of productDeleted.images)
        {
            fs.unlink(path.resolve(image));
        }
        res.json({success: true, product: productDeleted});
    }
    else
    {
        res.status(400).json({success: false, error: 'The product does not exist'});
    }
}

module.exports = productCtrl;