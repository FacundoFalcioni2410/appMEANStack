const { Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: String,
    password: String,
    profile: String,
    cartID: String,
    phoneNumber: String,
    address: {
        postalCode: String,
        address: String,
        city: String,
    },
    dni: Number,
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('User', UserSchema);