const { Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name: String,
    price: Number,
    stock: Number,
    imagePath: String,
    description: String,
    category: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Product', ProductSchema);