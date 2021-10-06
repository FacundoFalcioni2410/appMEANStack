const { Schema, model} = require('mongoose');

const CartSchema = new Schema({
    userID: String,
    products: [],
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Cart', CartSchema);