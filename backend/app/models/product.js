const { Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Product', ProductSchema);