const { Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name: String,
    price: Number,
    stock: Number,
    images: [],
    description: String,
    category: String,
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Product', ProductSchema);