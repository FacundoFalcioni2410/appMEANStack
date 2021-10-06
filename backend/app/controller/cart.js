const cartCtrl = {};

const Cart = require('../models/cart');

cartCtrl.getCarts = async (req, res) =>{
    const carts = await Cart.find()
    res.json(carts)
}

cartCtrl.getCart = async (req, res) =>{
    const cart = await Cart.findById(req.params.id)
    res.json(cart)
}

cartCtrl.updateCart = async (req, res) =>{
    const { product, cartID } = req.body;
    const cart = await Cart.findById(cartID);

    let existe = false;
    let maxReached = false;

    if(cart.products.length)
    {
      for(let item of cart.products)
      {
        if(item._id === product._id)
        {
          if(item.quantity >= 0 && item.quantity <= 3)
          {
            console.log(item);
            item.quantity++;
          }
          else
          {
            maxReached = true;
          }
          existe = true;
        }
      }
    }

    if(!existe)
    {
        cart.products.push(product);
        await Cart.findByIdAndUpdate(cartID, cart)
        const cartFinal = await Cart.findById(cartID);
        res.json({success: true, cart: cartFinal});
    }
    else if(!maxReached)
    {
        await Cart.findByIdAndUpdate(cartID, cart)
        const cartFinal = await Cart.findById(cartID);
        res.json({success: true, cart: cartFinal});
    }
    else
    {
      const cartFinal = await Cart.findById(cartID);
      res.status(400).json({success: false, message: "Limit of this product reached", cart: cartFinal});
    }

}

cartCtrl.emptyCart = async (req, res) =>{
  const { cartID } = req.body;

  const cart = await Cart.findById(cartID);

  cart.products = Array(0);

  await Cart.findByIdAndUpdate(cartID, cart)
  const cartFinal = await Cart.findById(cartID);
  res.json({success: true, cart: cartFinal});
  
}

cartCtrl.deleteCart = async (req,res) =>{
  const cart = await Cart.findByIdAndDelete(req.params.id);
}

module.exports = cartCtrl;