const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: 'Product',
  },
  name: String,
  count: Number,
  price: Number,
});

const ProductCart = mongoose.model('ProductCart', ProductCartSchema);

const orderSchema = new mongoose.Schema(
  {
    product: [ProductCartSchema],
    transtion_id: {},
    amount: { type: Number },
    address: String,
    status: {
      type: String,
      default: '',
      enum: ['cancelled', 'Delivered', 'Shipped', 'processing', 'Received'],
    },
    updated: Date,
    user: {
      type: ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = { ProductCart, Order };
