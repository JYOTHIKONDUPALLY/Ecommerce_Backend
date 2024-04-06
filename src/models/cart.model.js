// const mongoose = require('mongoose');
// const { productSchema } = require('./product.model');
// const config = require("../config/config");
// const { string } = require('joi');

// // TODO: CRIO_TASK_MODULE_CART - Complete cartSchema, a Mongoose schema for "carts" collection
// const CartItems=mongoose.Schema(
//   {
//     product:{
//       type:String,
//     },
//     quantity:{
//       type:Number,
//     }
//   }
 
// )
// const cartSchema = mongoose.Schema(
//   {
//     email:{
//       type:String,
//       required:true,
//       unique:true
//     },
//     paymentOption:{
// type:String,
// default:"PAYMENT_OPTION_DEFAULT",
//     },
//     cartItems:{
//       type:[CartItems]
//     }

//   },
//   {
//     timestamps: false,
//   }
// );


// /**
//  * @typedef Cart
//  */
// const Cart = mongoose.model('Cart', cartSchema);

// module.exports.Cart = Cart;

const mongoose = require('mongoose');
const { productSchema } = require('./product.model');
const config = require("../config/config")

// TODO: CRIO_TASK_MODULE_CART - Complete cartSchema, a Mongoose schema for "carts" collection
const cartSchema = mongoose.Schema(
  {
    email:{
      type:String,
      required:true,
      unique:true
    },
    cartItems:[{
      product: productSchema,
      quantity:Number
    }],
    paymentOption:{
      type:String,
      default:config.default_payment_option
    }
  },
  {
    timestamps: false,
  }
);


/**
 * @typedef Cart
 */
const Cart = mongoose.model('Cart', cartSchema);

module.exports.Cart = Cart;