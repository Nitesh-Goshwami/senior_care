import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  product: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product', 
    required: [true, 'Product reference is required'] 
  },
  qty: { 
    type: Number, 
    required: [true, 'Quantity is required'], 
    min: [1, 'Quantity must be at least 1'],
    validate: {
      validator: Number.isInteger,
      message: 'Quantity must be an integer'
    }
  },
  price: { 
    type: Number, 
    required: [true, 'Price is required'], 
    min: [0, 'Price must be a positive number']
  },
});

const addressSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Recipient name is required'], trim: true },
  phone: { 
    type: String, 
    required: [true, 'Phone number is required'], 
    match: [/^\d{10,15}$/, 'Phone number must be 10-15 digits'] 
  },
  addressLine1: { type: String, required: [true, 'Address Line 1 is required'] },
  addressLine2: { type: String },
  city: { type: String, required: [true, 'City is required'] },
  state: { type: String, required: [true, 'State is required'] },
  postalCode: { 
    type: String, 
    required: [true, 'Postal code is required'], 
    match: [/^\d{4,10}$/, 'Postal code must be 4-10 digits'] 
  },
  country: { type: String, required: [true, 'Country is required'] }
}, { _id: false });

const orderSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: [true, 'User reference is required'] 
    },
    items: {
      type: [itemSchema],
      validate: {
        validator: function(arr) {
          return Array.isArray(arr) && arr.length > 0;
        },
        message: 'At least one item is required in the order'
      }
    },
    amount: { 
      type: Number, 
      required: [true, 'Order amount is required'], 
      min: [0, 'Amount must be a positive number'] 
    },
    payment: {
      method: { 
        type: String, 
        enum: {
          values: ['COD', 'CARD', 'UPI'],
          message: 'Payment method must be COD, CARD, or UPI'
        }, 
        default: 'COD' 
      },
      status: { 
        type: String, 
        enum: {
          values: ['pending', 'paid', 'failed'],
          message: 'Payment status must be pending, paid, or failed'
        }, 
        default: 'pending' 
      },
      txnId: { type: String }
    },
    shippingAddress: { 
      type: addressSchema, 
      required: [true, 'Shipping address is required'] 
    },
    status: { 
      type: String, 
      enum: {
        values: ['placed', 'confirmed', 'shipped', 'delivered', 'cancelled'],
        message: 'Status must be one of: placed, confirmed, shipped, delivered, cancelled'
      }, 
      default: 'placed' 
    },
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);