import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, index: true },
  passwordHash: String,
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
  phone: String,
  addresses: [{
    label: String,
    line1: String,
    line2: String,
    city: String,
    state: String,
    pincode: String,
    isDefault: Boolean
  }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
