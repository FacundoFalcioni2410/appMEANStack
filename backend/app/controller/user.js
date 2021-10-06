const userCtrl = {};
const cartCtrl = {};

const User = require('../models/user');
const Cart = require('../models/cart');

const bcryptjs = require('bcryptjs');

userCtrl.getUsers = async (req, res) =>{
    const Users = await User.find()
    res.json(Users)
}

userCtrl.validateUser = async (req,res) =>{
    console.log(req.body);
    try {
        let user = await User.findOne({ email: req.body.email });
        if(!user) {
            return res.status(400).send({ message: "Invalid data" });
        }
        if(!bcryptjs.compareSync(req.body.password, user.password)) {
            return res.status(400).send({ message: "Invalid data" });
        }
        res.send({ user: user });
    } catch (error) {
        res.status(500).send(error);
    }
}

userCtrl.createUser = async (req,res) =>{
    const {email, profile} = req.body

    let user = await User.findOne({ email: req.body.email });
    if(user)
    {
        res.status(500).json({success: false, error: "The user already exists"});
    }
    else
    {
        if(validateEmail(req.body.email))
        {
            let passwordB = req.body.password;
            if((passwordB.length >= 8))
            {
                let password = await bcryptjs.hash(passwordB, 8)
    
                const newUser = new User({email, password, profile});
                await newUser.save();
                await cartCtrl.createCart(newUser);
                const finalUser = await User.findById(newUser._id);
                res.status(200).json({success: true, user: finalUser});
            }
            else
            {
                res.status(500).json({success: false, error: "The password must have at least 8 characters"});
            }
        }
        else
        {
            res.status(500).json({success: false, error: "The email is not valid"});
        }

    }
    
    
}


userCtrl.updateUser = async (req, res) =>{
    const r = await User.findByIdAndUpdate(req.params.id, req.body);
    console.log(r);
    res.json({status: 'User updated'});
}

userCtrl.deleteUser = async (req,res) =>{
    const user = await User.findByIdAndDelete(req.params.id);
    if(user)
    {
        res.json({success: true, message: user});
    }
    else
    {
        res.status(500).json({success: false, message: "User not found"});
    }
}

validateEmail = (email) =>{
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (!regexp.test(email))
    {
      return false;
    }
    else
    {
      return true;
    }
}

cartCtrl.createCart = async (user) =>{
    const newCart = new Cart({userID: user._id, products: []})
    await newCart.save();

    let newUser = new User({
        cartID: newCart._id,
        profile: user.profile,
        email: user.email,
        _id: user._id,
        password: user.password,
    })



    await User.findByIdAndUpdate(user._id, newUser);
}

module.exports = userCtrl;