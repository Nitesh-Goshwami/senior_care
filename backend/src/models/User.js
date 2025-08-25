import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  label: { type: String, trim: true },
  line1: { type: String, required: true, trim: true },
  line2: { type: String, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  pincode: { 
    type: String, 
    required: true, 
    match: [/^\d{6}$/, 'Please enter a valid 6-digit pincode'] 
  },
  isDefault: { type: Boolean, default: false }
});

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'], 
    trim: true, 
    minlength: [2, 'Name must be at least 2 characters long'] 
  },
  email: { 
    type: String, 
    unique: true, 
    index: true, 
    required: [true, 'Email is required'], 
    trim: true, 
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'] 
  },
  role: { 
    type: String, 
    enum: ['customer', 'admin'], 
    default: 'customer' 
  },
  phone: { 
    type: String, 
    trim: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'],
    required: false
  },
  addresses: {
    type: [addressSchema],
    default: []
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
