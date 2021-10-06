const { Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: String,
    password: String,
    profile: String,
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('User', UserSchema);