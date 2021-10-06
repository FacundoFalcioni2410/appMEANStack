const userCtrl = {};

const User = require('../models/user');
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
                res.status(200).json({success: true, user: newUser});
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

// userCtrl.createUser = async (req,res) =>{
//     const {name, price, quantity} = req.body
//     const newUser = new User({name, price, quantity});
//     await newUser.save();
//     res.send('created')
// }

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

module.exports = userCtrl;