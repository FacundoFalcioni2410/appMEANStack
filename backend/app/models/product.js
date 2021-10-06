const { Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    imagePath: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Product', ProductSchema);